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


/*
Pom stands for page object model. It is a design pattern that allow us to organize
our playwright test to improve code readability and maintability.

In POM basically we take whole one application page as a class and inside that class we store locators(means web elements) and methods to interact with a web page elements   
*/ 