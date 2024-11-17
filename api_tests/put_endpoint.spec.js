import { test, expect } from "@playwright/test";

import apidata from "../testdata/api_data.json"

test("Verify put endpoint", async ({ request }) => {
  const resp = await request.put("/booking/15", {
    headers: { Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" },
    data: apidata.putcalldata 
    // {
      // firstname: "Sunny",
      // lastname: "Suri",
      // totalprice: 9000,
      // depositpaid: true,
      // bookingdates: {
      //   checkin: "2024-11-25",
      //   checkout: "2025-02-21",
      // },
      // additionalneeds: "Internet",
    // },
  }
);

  console.log(await resp.json());
  const json_resp = await resp.json();

  //   expect(resp.status()).toBe(200);
  //   expect(resp.ok()).toBe(true);

    expect(await resp.json()).toMatchObject( apidata.putcalldata
    //   {
    //   firstname: 'Sunny',
    //   lastname: 'Suri',
    //   totalprice: 9000,
    //   depositpaid: true,
    //   bookingdates: { checkin: '2024-11-25', checkout: '2025-02-21' },
    //   additionalneeds: 'Internet'
    // }
  );

  //   expect(json_resp.additionalneeds).toEqual("Internet");

  // const get_resp = await request.get("booking/15");
  // const json_get_rsp = await get_resp.json();

  // console.log(json_get_rsp);

  // expect(json_resp).toMatchObject({
  //   firstname: 'Sunny',
  //   lastname: 'Suri',
  //   totalprice: 9000,
  //   depositpaid: true,
  //   bookingdates: { checkin: '2024-11-25', checkout: '2025-02-21' },
  //   additionalneeds: 'Internet'
  // });
});
