import{test} from "@playwright/test"

test('CSS Selector',async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("yuvarani.sekar@testleaf.com")
    await page.locator('input[type="submit"]').click()
    await page.locator('[id="password"]').fill("TestLeaf@2028")
    await page.locator('input[type="submit"]').click()
    


    

}



)