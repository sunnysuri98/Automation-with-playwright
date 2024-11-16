import { test, expect } from "@playwright/test";

test("Handling", async ({ page }) => {
  await page.goto("https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/");

  await page.mouse.wheel(0,500);

  await page.waitForTimeout(5000);

  await page.locator("#cb-textbox-1").fill("11/18/2024");
  await page.keyboard.press("Enter")

 

  await page.waitForTimeout(5000);

  
  
});
