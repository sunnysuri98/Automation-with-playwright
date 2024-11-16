import { test, expect } from "@playwright/test";
import path from "path";

test("verify file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  await page
    .locator('//input[@id="file-upload"]')
    .setInputFiles(path.join("/home/sunny/Downloads/", "Mega.png"));

  await page.locator('//input[@id="file-submit"]').click();

  await expect(
    // page.locator('//h3[normalize-space()="File Uploaded!"]')).toBeVisible();
    page.getByText("File Uploaded!")
  ).toBeVisible();
});
