import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SearchInput } from "@/components/search-input/SearchInput";

describe("SearchInput", () => {
  it("renders input with placeholder and value", () => {
    render(<SearchInput value="BTC" onChange={() => {}} placeholder="Search symbols" />);
    const input = screen.getByPlaceholderText("Search symbols");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("BTC");
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<SearchInput value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "eth" } });
    expect(handleChange).toHaveBeenCalledWith("eth");
  });
});
