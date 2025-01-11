import { test, expect } from "@playwright/test";

test("Autosuggestion", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.locator("//input[@placeholder='Search Amazon.in']").fill("iphone");

  await page.waitForSelector("//div[@class='left-pane-results-container']");

    const elements=  await page.$$("//div[@class='left-pane-results-container']//div[@role='row']")
  

  //   for (let i = 0; i < elements.length; i++) {
  //     const text = await elements[i].textContent();
  //     if (text.includes("earphones wire")) {
  //       await elements[i].click();
  //       break;
  //     }
  //   }

    for (const element of elements) {
      if ((await element.textContent()).includes("15pro max")) {
        await element.click();
        break;
      }
    }

  // for (const key in elements) {
  //   if ((await elements[key].textContent()).includes("earphones wire")) {
  //     await elements[key].click();
  //     break;
  //   }
  // }
});
