import { expect, test } from '@playwright/test';

async function get_all_links(page) {
    const links = await page.$$("a");
    const hrefs = await Promise.all(
        links.map((link) => link.getAttribute("href"))
    );

    const valid_hrefs = hrefs.reduce((acc, href) => {
        if (href && href.includes("https")) {
            acc.add(href);
        }
        return acc;
    }, new Set());

    return Array.from(valid_hrefs);
}

test("Get all broken links from page", async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    const links = await get_all_links(page);

    for (let url of links) {
        let statusCode = 0;
        try {
            const resp = await page.request.get(url, { failOnStatusCode: false });
            statusCode = resp.status();

            if (statusCode >= 400) {
                expect.soft(false, `${finalUrl} is not ok (Status: ${statusCode})`).toBe(true);
            } else {
                expect.soft(true, `${finalUrl} is ok (Status: ${statusCode})`).toBe(true);
            }
        } catch (error) {
            console.error(`Error checking link ${finalUrl}:`, error);
            console.error(`Status code: ${statusCode}`);
            expect.soft(false, `${finalUrl} is not ok (Status: ${statusCode})`).toBe(true);
        }
    }
});
