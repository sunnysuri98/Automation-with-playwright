import { test, expect } from "@playwright/test";

test("Handling multiple tabs", async ({ browser }) => {
  const context = await browser.newContext();

  const page = await context.newPage();

  page.goto("https://flipkart.com/");

  page
    .getByPlaceholder("Search for Products, Brands and More")
    .fill("samsung s24 ultra");

  page
    .locator(
      "//button[@title='Search for Products, Brands and More']//*[name()='svg']"
    )
    .click();

  const [new_page] = await Promise.all([
    context.waitForEvent("page"),
    page
      .locator(
        "(//img[@alt='SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)'])[1]"
      )
      .click(),
  ]);

  new_page.close();

  page.getByPlaceholder("Search for Products, Brands and More").fill("");
  page
    .getByPlaceholder("Search for Products, Brands and More")
    .fill("keyboard");

  page
    .locator(
      "//form[@class='Hy6F9O header-form-search']/descendant::button[@class='MJG8Up']"
    )
    .click();

  await expect(
    page.locator("//div[@class='WOvzF4']/descendant::span[@class='BUOuZu']")
  ).toContainText("keyboard");


    await page.waitForTimeout(5000);
});



