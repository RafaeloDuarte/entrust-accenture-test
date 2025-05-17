import { test, expect } from "@playwright/test"

test("layout renders with sidebar and header", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByRole("main")).toBeVisible()
  await expect(page.getByRole("banner")).toBeVisible()
})