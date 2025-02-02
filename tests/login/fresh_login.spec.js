import { test, expect } from '@playwright/test';

test("Handling LOgin", async ({ page,context }) => {

    await context.clearCookies();

    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();

    await page.locator("#loginusername").fill("miabhai");
    await page.locator("#loginpassword").fill("miabhai");

    await page.locator("//button[normalize-space()='Log in']").click();

    await page.waitForSelector("#logout2", { state: 'visible' });

    await expect(page.locator("#logout2")).toBeVisible();
})


