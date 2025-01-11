import {test,expect} from '@playwright/test';

test("verify user is able to download file or not",async ({page})=>{

    await page.goto("https://examplefile.com/document/pdf/5-mb-pdf");

    const downloadPromise= page.waitForEvent("download");
    await page.locator("a[title='5 MB PDF Download']").click();

    const download= await downloadPromise;

    await download.saveAs("./" + download.suggestedFilename());
})