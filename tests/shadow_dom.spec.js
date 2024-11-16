import { test, expect } from "@playwright/test";

test("Handling shadow dom", async ({ page }) => {
  await page.goto("https://letcode.in/shadow");

  await page.fill("#fname", "hacker");

  await page.waitForTimeout(5000);

  

});
