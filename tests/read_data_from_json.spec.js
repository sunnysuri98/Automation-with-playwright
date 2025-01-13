import { test, expect } from "@playwright/test";

import dataArr from "../testdata/data.json";


for (let data of dataArr){
  test(`Testing for ${data.email}`,async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").fill(data.email);
    await page.getByPlaceholder("Enter Password").fill(data.password);

    await page.getByRole("button",{name:"Sign in"}).click();

    if (data.email === "admin@email.com" && data.password === "admin@123") {
      await expect(page.locator(".cartBtn")).toBeVisible();
  } else {
      await expect(page.locator(".errorMessage")).toBeVisible();
  }


  })
}



