import { test, expect } from '@playwright/test';

test('Handling slider', async ({ page }) => {

    await page.goto("https://groww.in/calculators/sip-calculator")


    const slider = await page.locator("//div[normalize-space()='Monthly investment']/parent::div/following-sibling::div[contains(@class,slider24Wrapper)]//div[@role='slider']");


    let element = await page.locator("#MONTHLY_INVESTMENT")
    let eleInitialValue = await element.getAttribute("value");


    let bb = await slider.boundingBox();
    console.log(bb);


    await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2);

    await page.mouse.down();

    await page.mouse.move(bb.x + 30, bb.y + bb.height / 2);

    await page.mouse.up();

    let bb1 = await slider.boundingBox();
    console.log(bb1);


    let afterMovingValue = await element.getAttribute("value");


    expect(parseInt(afterMovingValue)).toBeGreaterThan(parseInt(eleInitialValue));






})