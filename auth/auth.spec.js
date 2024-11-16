import { test, expect } from "@playwright/test";

test.beforeEach("Login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
});

test("Verify timesheet card navigation on dashboard page", async ({ page }) => {
  await expect(
    page.locator("//p[normalize-space()='Quick Launch']")
  ).toBeVisible();

  await expect(page.locator("//button[@title='Timesheets']")).toBeVisible();
  await page.locator("//button[@title='Timesheets']").click();

  await expect(
    page.locator(
      "//div[@class='oxd-topbar-body']/descendant::span[.='Timesheets ']"
    )
  ).toBeVisible();
});
