import { test, expect } from "@playwright/test";

// test("Keyboard events in playwright", async ({ page }) => {
//   await page.goto("https://www.google.com/");

//   await page.locator(
//       "//form[@role='search']/descendant::textarea[@title='Search']"
//   );

//   await page.keyboard.type("Donald Trump!");

//   await page.keyboard.press("ArrowLeft");

//   await page.keyboard.down("Shift");

//   for (let i = 0; i < "Trump".length; i++) {
//     await page.keyboard.press("ArrowLeft");
//   }

//   await page.keyboard.press("Backspace");

//   //   await page.keyboard.press("Enter");

//   await page.waitForTimeout(5000);
// });

test("Keyboard event in playwright", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.locator(
    "//form[@role='search']/descendant::textarea[@title='Search']"
  );

  await page.keyboard.type("Donald Trump!");

  await page.keyboard.press("Control+A");

  await page.keyboard.press("Backspace");

  await page.keyboard.press("Enter");

  for (let i=0;i<5;i++){
    await page.keyboard.press("ArrowDown")
  }

  await page.keyboard.press("Enter");



  await page.waitForTimeout(5000);
});
