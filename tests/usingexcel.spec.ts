import test from "@playwright/test";
import {parse } from "csv-parse/sync";
import fs from  'fs';


let value = fs.readFileSync('utils/login1.csv','utf-8')
console.log(value)

let value1:any[] = parse(value,{columns:true,skip_empty_lines:true})

for(let excel of value1){
test(`using csv file,${excel.tcid}`,async({page})=>{

    await page.goto('https://login.salesforce.com')
    await page.locator('[id="username"]').fill(excel.username1)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(excel.password1)
    await page.locator('[id="Login"]').click()

})
}