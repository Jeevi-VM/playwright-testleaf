import test from '@playwright/test';

test("advance level Xpath",async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator("//div[contains(@id,'username')]//input[@id='username']").fill("yuvarani.sekar@testleaf.com  ")
    await page.locator("//form[@id='login_form']/input[@type='submit']").click()
    await page.locator("//label[text()='Password']/following-sibling::input[@id='password']").fill("TestLeaf@2028")
   let gh="(//div[@class='w0 pr ln3 p16 remember']/preceding-sibling::input)[4]"
    await page.locator(gh).click()
})
