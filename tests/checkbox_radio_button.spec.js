import { test, expect } from "@playwright/test";

test("verify text", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await expect(
    page.locator('//form[@class="signup-form"]/descendant::h2[@class="header"]')
  ).toHaveText("Sign Up");
});

test("verify user is able to check and uncheck checkbox", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page
    .locator(
      '//label[normalize-space()="Cypress"]/preceding-sibling::div//input'
    )
    .check();

  await page.waitForTimeout(2000);

  await expect(
    page.locator(
      '//label[normalize-space()="Cypress"]/preceding-sibling::div//input'
    )
  ).toBeChecked();

  await page
    .locator(
      '//label[normalize-space()="Cypress"]/preceding-sibling::div//input'
    )
    .uncheck();

  await page.waitForTimeout(2000);

  const un_checked = await page.isChecked(
    '//label[normalize-space()="Cypress"]/preceding-sibling::div//input'
  );

  await expect(un_checked).toBeFalsy();
});

test("verify user is able to select female radio button ", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page
    .locator('//h4[.="Gender"]/following::input[@value="Female"]')
    .check();

  await page.waitForTimeout(2000);

  await expect(
    page.locator('//h4[.="Gender"]/following::input[@value="Female"]')
  ).toBeChecked();
});
