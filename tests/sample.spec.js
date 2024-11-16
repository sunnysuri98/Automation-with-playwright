import { test, expect } from "@playwright/test";

test.skip("first test", async ({page}) => {
    expect(100).toBe(100);
});
test("second test", async ({page}) => {
    expect("sunnysuri").toContain("sunny");
});
test("third test", async ({page}) => {
    expect(false).toBeFalsy();
});
test("fourth test", async ({page}) => {
    expect("Hacker One".includes("One")).toBeTruthy();
});


