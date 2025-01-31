import {test,expect} from '@playwright/test';
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

test("Delete endpoint testing @api",async ({request})=>{

    const p_resp = await request.post("", {
        data: request_body
    });

    const data = await p_resp.json();
    id = data.id
    console.log(id);
    

    const del_resp= await request.delete(`${id}`)

    expect(await del_resp.status()).toBe(204)

    const get_resp= await request.get(`${id}`)

    expect(await get_resp.status()).toBe(404)
    


})