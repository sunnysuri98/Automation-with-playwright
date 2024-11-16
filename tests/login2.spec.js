import { test, expect } from "@playwright/test";

test("Verify error login message", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);
  

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("Hacker");
  await page.locator("button[type='submit']").click();

//   await page.waitForTimeout(5000);

  const err_text = await page
    .locator('//p[normalize-space()="Invalid credentials"]')
    .textContent();

//   await expect(err_text.includes("Invalid")).toBeTruthy();
  await expect(err_text === "Invalid credentials").toBeTruthy();
});


