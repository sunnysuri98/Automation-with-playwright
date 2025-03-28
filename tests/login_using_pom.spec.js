import { test,expect } from "@playwright/test";
import LoginPage from "../pages/login_page";
import DashboardPage from "../pages/dashboard_page";

test("Verify login functionality", async ({ page }) => {
  page.goto("https://freelance-learn-automation.vercel.app/login");

  const login_p = new LoginPage(page);

  await login_p.login("admin@email.com", "admin@123");

  const dash = new DashboardPage(page);
  
  await expect(page.locator("//h1[normalize-space()='Learn Automation Courses']")).toHaveText("Learn Automation Courses");

  await dash.logout();
});
