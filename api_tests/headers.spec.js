import { test, expect } from "@playwright/test";

test("Verify headers", async ({ request }) => {
  const resp = await request.get("booking/50");
  // const head= await resp.headers();
  // console.log(head);

  // expect(head.server).toEqual("Cowboy");
  // expect(head["x-powered-by"]).toEqual("Express");

  const headersInlist = await resp.headersArray();
  // console.log(headersInlist);

  // expect(headersInlist.length).toBe(11);

  headersInlist.forEach((item) => {
    console.log(`${item.name} :: ${item.value}`);
  });
});
