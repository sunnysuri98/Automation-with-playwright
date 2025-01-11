import { test, expect } from "@playwright/test";

let token;
test.beforeAll("Verify auth endpoint", async ({ request }) => {
  const resp = await request.post("/auth", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username: "admin",
      password: "password123",
    },
  });

  token = (await resp.json()).token;
});

test("Verify put endpoint", async ({ request }) => {
  const resp = await request.put("/booking/55", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: `token=${token}`
    },
    data:{
        "firstname": "Karan",
        "lastname": "Suri",
        "totalprice": 8000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-12-18",
            "checkout": "2025-02-25"
        },
        "additionalneeds": "super bowls needed"
    }
  });

  expect((await resp.status())).toBe(200);
  
});
