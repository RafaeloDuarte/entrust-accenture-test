import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { PreferencesProvider } from "@/context/PreferencesContext";
import { describe, it, expect, vi } from "vitest";
import { SymbolList } from "@/components/symbol-list/SymbolList";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      symbols: [
        { symbol: "BTCUSDT", status: "TRADING" },
        { symbol: "ETHUSDT", status: "TRADING" },
        { symbol: "XRPUSDT", status: "BREAK" }, // Should be filtered out
      ]
    }),
  })
) as any;

describe("SymbolList", () => {
  it("renders fetched trading symbols and filters them", async () => {
    render(
      <PreferencesProvider>
        <SymbolList />
      </PreferencesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("BTCUSDT")).toBeInTheDocument();
      expect(screen.getByText("ETHUSDT")).toBeInTheDocument();
    });

    // Should not render XRPUSDT (not TRADING)
    expect(screen.queryByText("XRPUSDT")).not.toBeInTheDocument();
  });

  it("toggles symbol on click", async () => {
    render(
      <PreferencesProvider>
        <SymbolList />
      </PreferencesProvider>
    );

    const btcButton = await screen.findByText("BTCUSDT");
    fireEvent.click(btcButton);
    expect(btcButton).toHaveClass("bg-secondary");

    fireEvent.click(btcButton);
    expect(btcButton).not.toHaveClass("bg-secondary");
  });
});
