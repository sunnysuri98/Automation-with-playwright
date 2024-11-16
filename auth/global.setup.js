import { test } from "@playwright/test";

test("Login Setup", async ({page}) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  await page.context().storageState({ path: "./imp/.auth/auth.json" });

  
});
