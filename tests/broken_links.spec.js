import { test, expect } from "@playwright/test";

async function getAllLinks(page) {
  const hrefs = await page.$$eval("a", (anchors) =>
    anchors
      .map((a) => a.getAttribute("href"))
      .filter(
        (href) =>
          href && (href.startsWith("http://") || href.startsWith("https://"))
      )
  );
  return Array.from(new Set(hrefs));
}

test("Broken Links Checker ", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.Google.com/", {
    waitUntil: "domcontentloaded",
  });

  const links = await getAllLinks(page);
  console.log(`Found ${links.length} unique links`);

  const failedLinks = [];

  await Promise.allSettled(
    links.map(async (link) => {
      const newPage = await context.newPage();
      try {
        const response = await newPage.goto(link, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });
        const status = response?.status();

        if (!status || status >= 400) {
          failedLinks.push({ link, status });
          expect
            .soft(false, `${link} failed with status ${status}`)
            .toBeTruthy();
        } else {
          expect.soft(true, `${link} is working (${status})`).toBeTruthy();
        }
      } catch (err) {
        failedLinks.push({ link, error: err.message });
        console.error(`Error checking ${link}:`, err.message);
      } finally {
        await newPage.close();
      }
    })
  );

  console.log("\nFailed Links:", failedLinks);
  expect(failedLinks.length, "Some links failed").toBe(0);
});
