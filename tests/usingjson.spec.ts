import test from "@playwright/test";

import login from '../utils/logins.json'


for(let utils of login){
test(`using jason file'${utils.TestcaseId}`,async({page})=>{
    await page.goto('https://login.salesforce.com')
    await page.locator('[id="username"]').fill(utils.username)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(utils.password)
    await page.locator('[id="Login"]').click()
})
}