import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 700 } });

test("verify login functionality", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL(/dashboard/);

  // await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toHaveText(
  //   "Dashboard"
  // );
  // await expect(page).toHaveText(
  //   "Dashboard"
  // );
  // await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toContainText(
  //   "Dashboard"
  // );

  // await page
  //   .locator('//h6[normalize-space()="Dashboard"]')
  //   .screenshot({ path: "./screenshot.png" });
});

test("verify logout functionality", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator("button[type='submit']").click();

  await page.locator("//img[@class='oxd-userdropdown-img']").click();

  await page.waitForTimeout(5000);

  await page.locator("//a[normalize-space()='Logout']").click();

  await expect(page).toHaveURL(/login/);
});
