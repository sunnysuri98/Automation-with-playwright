import { test, expect } from "@playwright/test";

async function get_all_links(page) {
  const all_anchor_tags = await page.$$("a");
  const hrefs = await Promise.all(
    all_anchor_tags.map((link) => link.getAttribute("href"))
  );

  const valid_hrefs = hrefs.reduce((acc, href) => {
    if (href && href.startsWith("https")) {
      acc.add(href);
    }
    return acc;
  }, new Set());

  return Array.from(valid_hrefs);
}

test("Broken Links Checker", async ({ page }) => {
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );

  const links = await get_all_links(page);

  let failed_links = [];

  for (const link of links) {
    try {
      const resp = await page.request.get(link);
      if (!resp.ok()) {
        expect.soft(false, `${link} is not working fine`).toBeTruthy();
        failed_links.push(link);
      } else {
        expect.soft(true, `${link} is working fine`).toBeTruthy();
      }
    } catch (error) {
      console.log(`Error checking ${link}`, error);
    }
  }

  console.log("Failed Links: ", failed_links);
});
