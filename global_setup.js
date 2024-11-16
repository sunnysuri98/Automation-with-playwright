// import {chromium } from "@playwright/test";

// async function global_setup() {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto("https://opensource-demo.orangehrmlive.com/");

//   await page.getByPlaceholder("Username").fill("Admin");
//   await page.getByPlaceholder("Password").fill("admin123");

//   await page.getByRole("button", { name: "Login" }).click();

//   await page.waitForURL(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
//   );

//   await page.context().storageState({ path: "./play/.auth/auth.json" });
// }


// export default global_setup;
