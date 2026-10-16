import test from "@playwright/test";
test('learn basic Xptha',async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator("//input[@id='username']").fill('democsr')
    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
    await page.locator("//input[contains(@type,'submit')]").click()
    await page.locator("//a[normalize-space()='CRM/SFA']").click()
}

)