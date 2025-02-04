import { test, expect } from "@playwright/test";

let context;
let page;
test.beforeEach(async ({ browser }) => {

  context = await browser.newContext();
  page = await context.newPage();

  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.waitForLoadState("load")


})

test("verify text", async () => {

  await expect(
    page.locator('//form[@class="signup-form"]/descendant::h2[@class="header"]')
  ).toHaveText("Sign Up");
});

test("verify user is able to check and uncheck checkbox", async () => {

  await page
    .locator(
      '//label[normalize-space()="Java"]/preceding-sibling::div//input'
    )
    .check();


  await expect(
    page.locator(
      '//label[normalize-space()="Java"]/preceding-sibling::div//input'
    )
  ).toBeChecked();

  await page
    .locator(
      '//label[normalize-space()="Java"]/preceding-sibling::div//input'
    )
    .uncheck();


  const un_checked = await page.isChecked(
    '//label[normalize-space()="Java"]/preceding-sibling::div//input'
  );

  await expect(un_checked).toBeFalsy();
});

test("verify user is able to select female radio button ", async () => {


  await page
    .locator('//h4[.="Gender"]/following::input[@value="Female"]')
    .check();

  await page.waitForTimeout(2000);

  await expect(
    page.locator('//h4[.="Gender"]/following::input[@value="Female"]')
  ).toBeChecked();
});
