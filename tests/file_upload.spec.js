import { test, expect } from "@playwright/test";
import path from "path";

test("verify file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  await page
    .locator('//input[@id="file-upload"]')
    .setInputFiles(path.join("/home/sunny/Downloads/", "test.png"));

  await page.locator('//input[@id="file-submit"]').click();


  await expect(
    // page.locator('//h3[normalize-space()="File Uploaded!"]')).toBeVisible();
    page.getByText("File Uploaded!")
  ).toBeVisible();
});


test.only("Upload files for non-input element and assert", async ({ page }) => {
  await page.goto("https://www.fotor.com/features/background-remover/upload");


  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),

    page.locator("//div[@class='bgremove_noimage_upload']/descendant::span[text()='Upload Image']").click()
  ]);

  await fileChooser.setFiles(["/home/sunny/Downloads/test.png"])
  await page.waitForLoadState("networkidle");


  await page.waitForTimeout(5000);
})
