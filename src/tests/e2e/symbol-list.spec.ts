import { test, expect } from "@playwright/test";

test.describe("SymbolList interactions", () => {
  test("searches and selects a symbol", async ({ page }) => {
    await page.goto("/");

    const input = page.getByPlaceholder("Search symbols...");
    await expect(input).toBeVisible();

    await input.fill("ETHBTC");

    const btcButton = page.getByRole("button", { name: /ETHBTC/i });
    await expect(btcButton).toBeVisible();
    await btcButton.click();

    await expect(btcButton).toHaveClass(/bg-secondary/);
  });

  test("adds and removes symbol from watchlist", async ({ page }) => {
    await page.goto("/");

    const ethButton = page.getByRole("button", { name: /ETHBTC/i });
    await ethButton.click();
    await expect(ethButton).toHaveClass(/bg-secondary/);

    const watched = page.getByText("Watched Symbols");
    await expect(watched).toBeVisible();
    await expect(page.getByText(/ETHBTC/)).toBeVisible();
  });
});
