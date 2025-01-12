import { test, expect } from "@playwright/test";

// test.use({ viewport: { width: 1400, height: 700 } });

test("verify login functionality", async ({ page }) => {
  await page.goto(
    "https://nearform.github.io/testing-playground/#/login-form"
  );

  await page.getByLabel("Username").fill("admin");
  await page.getByLabel("Password").fill("Passw0rd!");
  await page.getByTestId("login-button").click();

  await expect(page.getByText("You are currently logged in!")).toBeVisible();
  await expect(page.getByText("You are currently logged in!")).toHaveText("You are currently logged in!")

 await page.getByText("You are currently logged in!").screenshot({path:"./text.png"});



});

test.only("verify logout functionality", async ({ page }) => {
  await page.goto(
    "https://nearform.github.io/testing-playground/#/login-form"
  );

  await page.getByLabel("Username").fill("admin");
  await page.getByLabel("Password").fill("Passw0rd!");
  await page.getByTestId("login-button").click();

  await page.getByTestId("logout-button").click();

  await expect(page.getByLabel("Username")).toBeVisible();





});
