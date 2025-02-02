import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeEach(async ({ browser }) => {

  context = await browser.newContext();
  page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForLoadState("domcontentloaded")

})

test.afterEach(async () => {
  await context.close();
})

test("Handling alert", async () => {

  page.on("dialog", async (dialog) => {

    expect(dialog.message()).toContain("I am a JS Alert")

    dialog.accept();
  })

  await page.getByRole("button", { name: "Click for JS Alert" }).click();
  await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")


})


test("Handling confirm", async () => {
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a JS Confirm")
    await dialog.dismiss();


  })

  await page.getByRole("button", { name: "Click for JS Confirm" }).click()
  await expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Cancel")
})

test("Handling prompt", async () => {

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a JS prompt");

    await dialog.accept("hackerone");
  });

  await page
    .locator("//button[normalize-space()='Click for JS Prompt']")
    .click();


  await expect(page.locator("//p[@id='result']")).toHaveText("You entered: hackerone")

})

