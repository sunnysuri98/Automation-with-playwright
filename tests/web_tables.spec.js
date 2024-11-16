import { test, expect } from "@playwright/test";

test("handling web tables", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");

  await page.waitForURL("https://selectorshub.com/xpath-practice-page/");

  await page.mouse.wheel(0, 800);

  // await page.locator("//td[.='Garry White']/parent::tr//td[1]//input").click();

  // const no_of_rows= await page.locator("//table[@id='resultTable']//tbody//tr").count();

  // await expect(no_of_rows).toBe(6);

  await expect(
    page.locator("//table[@id='resultTable']//tbody//tr[2]//td[2]")
  ).toHaveText("Jasmine.Morgan");

  //   const all_headings =await page
  //     .locator("//table[@id='resultTable']//thead//tr//th")
  //     .allInnerTexts();
  const headings = await page
    .locator("//table[@id='resultTable']//thead//tr//th")
    .allTextContents();

  for (let value of headings) {
    console.log(value);
  }

  //   console.log(all_headings);
  //   console.log(headings);

  // await page.waitForTimeout(5000);
});
