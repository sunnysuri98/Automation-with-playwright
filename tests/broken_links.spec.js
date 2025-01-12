import { test, expect } from '@playwright/test';

async function get_all_links(page) {

    const links = await page.$$('a');
    const hrefs = await Promise.all(links.map((link) => link.getAttribute("href")))

    const valid_hrefs = hrefs.reduce((acc, href) => {

        if (href && href.startsWith("https")) {
            acc.add(href);

        }
        return acc;

    }, new Set())

    return Array.from(valid_hrefs);

}

test("broken links", async ({ page }) => {

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
    const links = await get_all_links(page);
    console.log(links.length);

    await Promise.all(links.map(async (url) => {
        try {
            const resp = await page.request.get(url);
            if (resp.ok()) {
                expect.soft(true, `${url} is working perfectly fine`).toBeTruthy();
            } else {
                expect.soft(false, `${url} is not working`).toBeTruthy();

            }

        } catch (error) {

            console.log(`Error checking ${url}`, error);


        }
    }))






})