import { test, expect } from '@playwright/test';

test("verify user is able to download file", async ({ page }) => {

    await page.goto("https://examplefile.com/document/pdf/5-mb-pdf");

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("a[title='5 MB PDF Download']").click()

    ])

    await download.saveAs("./" + download.suggestedFilename());

})