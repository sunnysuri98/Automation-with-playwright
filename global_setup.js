import { expect, chromium } from '@playwright/test';


async function globalSetup() {

  let browser = await chromium.launch();
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("admin");
  await page.locator("#loginpassword").fill("admin");

  await page.locator("//button[normalize-space()='Log in']").click();

  await page.waitForSelector("#logout2", { state: 'visible' });

  await expect(page.locator("#logout2")).toBeVisible();

  await page.context().storageState({path:"./imp/auth.json"})

  await browser.close();

}

export default globalSetup;