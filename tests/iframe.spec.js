import { test } from "@playwright/test";

test("Handle iframe", async ({ page }) => {
  await page.goto("https://selectorshub.com/iframe-scenario/");

  const iframeLocator1 = await page.frameLocator("//iframe[@id='pact1']");

  await iframeLocator1
    .locator("//input[@placeholder='First Crush']")
    .fill("Anonymous");

  const iframeLocator2 = await iframeLocator1.frameLocator(
    "//iframe[@id='pact2']"
  );

  await iframeLocator2.getByPlaceholder("Current Crush Name").fill("RAW");

  const iframeLocator3 = await iframeLocator2.frameLocator(
    "//iframe[@id='pact3']"
  );
  await iframeLocator3.getByPlaceholder("Destiny").fill("success");

  await page.waitForTimeout(5000);
});
