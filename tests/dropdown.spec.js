import { test, expect } from "@playwright/test";


test.beforeEach(async ({page})=>{
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.waitForLoadState("load");
})

test("Verify user is able to select values from drop-down", async ({
  page,
}) => {

  /*
label
value
index
*/

    await page.locator("#state").selectOption({ label: "Bihar" });

    await page.waitForTimeout(2000);

    const test_state = await page.evaluate(
      () => document.querySelector("#state").value
    );

    await expect(test_state).toBe("Bihar");

    console.log(test_state);
});

test("verify user is able to select multiple values under drop-down", async ({
  page,
}) => {
  await page
    .locator('//select[@id="hobbies"]')
    .selectOption(["Reading", "Swimming"]);

  await page.waitForTimeout(2000);
});
