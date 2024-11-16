import { test, expect } from "@playwright/test";

test.skip("Handling alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialogWindow) => {
    expect(dialogWindow.message()).toContain("I am a JS Alert");

    await dialogWindow.accept();
  });

  await page
    .locator("//button[normalize-space()='Click for JS Alert']")
    .click();

  await page.waitForTimeout(2000);
});

test("Handling confirm", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialogWindow) => {
    expect(dialogWindow.message()).toContain("I am a JS Confirm");

    await dialogWindow.dismiss();
  });

  await page
    .locator("//button[normalize-space()='Click for JS Confirm']")
    .click();

  await page.waitForTimeout(2000);
});

test("Handling prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (dialogWindow) => {
    expect(dialogWindow.message()).toContain("I am a JS prompt");

    await dialogWindow.accept("hackone");
  });

  await page
    .locator("//button[normalize-space()='Click for JS Prompt']")
    .click();

  // await page.waitForTimeout(2000);

  
});
