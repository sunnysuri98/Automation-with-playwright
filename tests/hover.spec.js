import { test, expect } from "@playwright/test";

test("valid login", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.getByPlaceholder("Enter Email").fill("admin@email.com");
  await page.getByPlaceholder("Enter Password").fill("admin@123");

  await page.getByRole("button", { name: "Sign in" }).click();

  await page.locator('//span[normalize-space()="Manage"]').hover();

  await page.locator('//a[normalize-space()="Manage Courses"]').click();

  const verify_text= await page.locator('//h1[normalize-space()="Manage Courses"]').textContent()

  await expect(verify_text.includes('Manage Courses')).toBe(true);

// console.log(verify_text);

});
