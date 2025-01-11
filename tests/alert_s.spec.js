import { test, expect } from "@playwright/test";
let page;

test.beforeEach(async ({browser})=>{
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForLoadState('networkidle');
})

test.afterEach(async () => {
  await page.close(); 
});

test("Handling alert", async () => {


  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a JS Alert");

    await dialog.accept();
  });

  await page
    .locator("//button[normalize-space()='Click for JS Alert']")
    .click();

  await page.waitForTimeout(2000);
});

test("Handling confirm", async () => {

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a JS Confirm");

    await dialog.dismiss();
  });

  await page
    .locator("//button[normalize-space()='Click for JS Confirm']")
    .click();

  await page.waitForTimeout(2000);
});

test("Handling prompt", async () => {

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a JS prompt");

    await dialog.accept("hackone");
  });

  await page
    .locator("//button[normalize-space()='Click for JS Prompt']")
    .click();

  await page.waitForTimeout(2000);

  
});
