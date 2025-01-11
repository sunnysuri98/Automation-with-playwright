import { test, expect } from "@playwright/test";

// test("Verify get response", async ({ request }) => {
//   const resp = await request.get("booking/1500");
//   console.log(await resp.json());
// //   console.log(await resp.status());
// //   console.log(await resp.ok());

// //   expect(resp.status()).toBe(200);
// //   expect(resp.ok()).toBe(true);
//      expect(await resp.json()).toMatchObject({
//         "firstname": "Josh",
//         "lastname": "Allen",
//         "totalprice": 111,
//         "depositpaid": true,
//         "bookingdates": {
//             "checkin": "2018-01-01",
//             "checkout": "2019-01-01"
//         },
//         "additionalneeds": "super bowls"
//     })
// });

test("API with UI verification", async ({ request, page }) => {
  // Make the API request
  const resp = await request.get("https://api.demoblaze.com/entries");

  // Parse the JSON response
  const data = await resp.json();

  // Access the third item
  const third_item_text = data.Items[2].title;

  page.goto("https://www.demoblaze.com/");
  await expect(page.locator("//a[normalize-space()='Nexus 6']")).toHaveText(
    third_item_text
  );
});

// test("Verify get response-1", async ({ request }) => {
//   const resp = await request.get("/booking?firstname=Jane&lastname=Doe");
//   const resp = await request.get("/booking",{
//     params:{
//         firstname:"Jane",
//         lastname: "Doe",
//     }
//   });
//   console.log(await resp.json());
// });
