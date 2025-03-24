import { test, expect } from "@playwright/test";

test("Autosuggestion", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.locator("//textarea[@title='Search']").fill("hack");


  await page.waitForSelector("//div[@class='erkvQe']");

    const elements=  await page.$$("//ul[@role='listbox']//li")
  

  //   for (let i = 0; i < elements.length; i++) {
  //     const text = await elements[i].textContent();
  //     if (text.includes("earphones wire")) {
  //       await elements[i].click();
  //       break;
  //     }
  //   }

    for (const element of elements) {
      if ((await element.textContent()).includes("typer")) {
        await element.click();
        break;
      }
    }
});
