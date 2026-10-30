import { test, expect } from '@playwright/test';
 
test("Service Catalog",async({page})=>{
    await page.goto("https://dev330545.service-now.com")
    await page.locator("[id='user_name']").fill("Admin")
    await page.locator("[id='user_password']").fill("TkA5z3JBzp//")
    await page.getByRole('button', { name: 'Log in' }).click()
    await page.getByRole('menuitem', { name: 'All' }).click()
    await page.getByPlaceholder('Filter').fill("Service")
    await page.getByRole('link', { name: 'Service Catalog 3 of' }).click();
    let mobileframe = page.frameLocator("iframe[id='gsft_main']")
    await mobileframe.locator("//h2[contains(text(),'Mobiles')]").click()
    await mobileframe.locator("//h3[normalize-space()='Apple iPhone 13 pro']").click();
    let itemText = await mobileframe.locator("[class='sc_cat_item_text_block']").innerText()
    console.log("Apple iPhone 13 pro key features:", '\n', itemText)
    await mobileframe.locator("//label[contains(text(),'Yes')]").click()
    await mobileframe.getByRole('textbox').fill("9823456789")
    await mobileframe.locator('select.cat_item_option').selectOption('500MB');
    await page.waitForTimeout(5000)
    await mobileframe.locator("//label[contains(text(),'No')]").click()
    await mobileframe.locator("//label[contains(text(),'Silver')]").click()
    await mobileframe.locator("//label[contains(text(),'128 GB')]").click()
    await mobileframe.getByRole('button', { name: 'Order Now' }).click()
    await page.waitForTimeout(2000)
    let notificationText = await mobileframe.locator("//div[contains(@class,'notification')]").innerText()
    console.log("Order Confirmation:", notificationText)
    await page.screenshot({
    path: 'data/servicecatalog.png',
    fullPage: true
});

})