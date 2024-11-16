import { test, expect } from "@playwright/test";

// test("test", async () => {
//   const browser = await webkit.launch();
//   const page = await browser.newPage();

//   await page.goto("https://www.google.com");

//   await expect(page).toHaveTitle("Google");
// });

test("handling drag and drop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.mouse.wheel(0, 500);

  await page
    .locator("//div[@id='draggable']")
    .dragTo(page.locator("//div[@id='droppable']"));

  await expect(
    await page.locator("//div[@id='droppable']").textContent()
  ).toContain("Dropped!");

  await page.waitForTimeout(5000);
});
