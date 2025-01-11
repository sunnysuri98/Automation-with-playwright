import { test, request } from "@playwright/test";

let reqcontext;
test.beforeAll(async () => {
  reqcontext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept: "application/json",
    },
  });
});

// test('Get endpoint testing',async ({request})=>{
//     const response= await request.get("https://restful-booker.herokuapp.com/booking",{headers:{
//         Accept: "application/json",
//     }});

//     console.log(await response.json());

// });

// test("Get endpoint testing-2", async () => {

//     const reqcontext1= await request.newContext({
//         baseURL:"https://restful-booker.herokuapp.com",
//         extraHTTPHeaders:{
//             Accept: "application/json",
//         }
//     })

//   const response = await reqcontext1.get("/booking");

//   console.log(await response.json());
// });

test("Get endpoint testing-3", async ({ request }) => {
  const response = await request.get("/booking");

  console.log(await response.json());
});

// test("Get endpoint testing-4", async () => {
//   const response = await reqcontext.get("/booking");

//   console.log(await response.json());
// });
