import { test, expect } from '@playwright/test';
import api_data from '../../testdata/api_data.json'
import { faker } from '@faker-js/faker'

let request_body;
let id;

test.beforeAll(()=>{
    const name = faker.person.fullName();

request_body = {
    name: name,
    email: `${name.replace(/ /g, '').toLowerCase()}@gmail.com`,
    gender: faker.helpers.arrayElement(['male', 'female']),
    status: faker.helpers.arrayElement(['active', 'inactive'])

}})

test('Put endpoint testing @api', async ({ request }) => {
    const p_resp = await request.post("", {
        data: request_body
    });

    const data = await p_resp.json();
    id = data.id
    const put_resp = await request.put(`${id}`, { data: api_data.putcalldata })

    expect(await put_resp.status()).toBe(200);


    const get_resp = await request.get(`${id}`)

    expect(await get_resp.status()).toBe(200);
    let updated_data = await get_resp.json();
    expect(updated_data.name).toBe(api_data.putcalldata.name)
    expect(updated_data.email).toBe(api_data.putcalldata.email)
    expect(updated_data.gender).toBe(api_data.putcalldata.gender)
    expect(updated_data.status).toBe(api_data.putcalldata.status)

    console.log(updated_data);
    


})