import { test, expect } from "@playwright/test";

import json_data from "../../testdata/api_data.json";

test("verify post endpoint", async ({ request }) => {
  const resp = await request.post("/booking", {
    data: json_data.postcalldata
    // {
      //   firstname: "Chris",
      //   lastname: "Suri",
      //   totalprice: 5000,
      //   depositpaid: false,
      //   bookingdates: {
      //     checkin: "2024-11-16",
      //     checkout: "2025-01-20",
      //   },
      //   additionalneeds: "Breakfast",
    // },
  });
  const json_resp = await resp.json();
  console.log(json_resp);
  

  // expect(await resp.status()).toBe(200);
  // expect(await resp.ok()).toBe(true);

  expect(json_resp.booking).toMatchObject( json_data.postcalldata
  //   {
  //   "firstname": "Chris",
  //   "lastname": "Suri",
  //   "totalprice": 5000,
  //   "depositpaid": false,
  //   "bookingdates": {
  //       "checkin": "2024-11-16",
  //       "checkout": "2025-01-20"
  //   },
  //   "additionalneeds": "Breakfast"
  // }
);

  // expect(json_resp.booking.totalprice).toEqual(5000);

  //     console.log( json_resp.booking);
});

// test("verify post-api with ui",async ({request}) => {

//     const resp= await request.post("https://api.demoblaze.com/addtocart",{data:{"id":"5225f5dd-95ce-f8f3-25ce-d6fd4bb57bcf","cookie":"user=1ea208a8-ca29-5bd4-d95f-b0ec419c90f6","prod_id":2,"flag":false}})

//     expect(resp.status()).toBe(200);

// })
