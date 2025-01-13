import { test, expect } from '@playwright/test';

test("handling new tab", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.checklyhq.com/");

    const [new_page] = await Promise.all([

        context.waitForEvent("page"),

        page.locator("//header[@id='nav']/descendant::div[@class='flex items-center']//a[normalize-space()='Login']").click()

    ])

    await expect(new_page).toHaveTitle("Sign In with Auth0");

    new_page.close();

    await page.waitForTimeout(5000);

    
})