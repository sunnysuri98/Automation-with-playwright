import { test, expect, request } from "@playwright/test";

let req;
test.beforeAll(async () => {
  req = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    },
  });
});

test("verify delete endpoint", async () => {
  const resp = await req.delete("/booking/25");
  
  expect(resp.status()).toBe(201);
expect(await resp.text()).toEqual("Created"); 

const resp1 = await req.get("/booking/25");
  expect(resp1.status()).toBe(404);
expect(await resp1.text()).toEqual("Not Found");

});



