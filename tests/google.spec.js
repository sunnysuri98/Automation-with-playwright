import { test, expect } from "@playwright/test";

test("Verify application title", async ({ page }) => {
  await page.goto("https://google.com");

  await expect(page).toHaveTitle("Yahoo");

  
});
