import { test, expect } from "@playwright/test";

import login_D from "../testdata/login_data.json";
import dataArr from "../testdata/data.json";

test.beforeEach("Login Test", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.fill("//input[@placeholder='Username']", login_D.username);
  await page.fill("//input[@placeholder='Password']", login_D.password);

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});


for (const d of dataArr) {
  test(`Add candidate for recruitment - ${d.firstName}`, async ({ page }) => {
    await page
      .locator("//aside[@class='oxd-sidepanel']/descendant::a//span[text()='Recruitment']")
      .click();

    await page.getByRole("button", { name: "Add" }).click();

    await page.getByPlaceholder("First Name").fill(d.firstName);
    await page.getByPlaceholder("Middle Name").fill(d.middleName);
    await page.getByPlaceholder("Last Name").fill(d.lastName);

    await page.fill(
      "//label[.='Email']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']//input[@placeholder='Type here']",
      d.email
    );

    await page.locator("//button[@type='submit'][.=' Save ']").click();

    await expect(page.getByRole("heading", { name: "Application Stage" })).toBeVisible();
  });
}
