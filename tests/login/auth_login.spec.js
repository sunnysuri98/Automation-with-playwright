import { test, expect } from "@playwright/test";

// test.use({ viewport: { width: 1400, height: 700 } });

test("Basic Test", async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html");

  await page.waitForSelector("#nameofuser", { state: 'visible' });

  await expect(page.locator("#nameofuser")).toBeVisible();

  await page.waitForTimeout(5000);



});








