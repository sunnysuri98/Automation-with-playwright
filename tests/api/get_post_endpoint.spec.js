import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

let request_body;

test.beforeAll(()=>{
    
    const name = faker.person.fullName();

request_body = {
    name: name,
    email: `${name.replace(/ /g, '').toLowerCase()}@gmail.com`,
    gender: faker.helpers.arrayElement(['male', 'female']),
    status: faker.helpers.arrayElement(['active', 'inactive'])

}})


test("post endpoint testing",{tag:'@api'},async ({ request }) => {
    const post_resp = await request.post("", {
        data: request_body
    });

    const data = await post_resp.json();
    expect(await post_resp.status()).toBe(201);


    const id = data.id

    const resp = await request.get(`${id}`)
    const resp_data = await resp.json();

    expect(await resp.status()).toBe(200);
    expect(resp_data.name).toBe(request_body.name)
    expect(resp_data.email).toBe(request_body.email)
    expect(resp_data.gender).toBe(request_body.gender)
    expect(resp_data.status).toBe(request_body.status)





})