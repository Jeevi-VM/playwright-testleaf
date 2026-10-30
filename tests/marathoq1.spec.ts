import {test,expect} from '@playwright/test';

test("advance level Xpath",async({page})=>{
    await page.goto('https://www.pvrcinemas.com/')
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);
    const pageURL = page.url();
    console.log('Page URL:',pageURL)
    await page.locator("(//span[contains(@class,'dropdown')])[1]").click()
    await page.locator("//h6[text()='Chennai']").click()
    //await page.waitForTimeout(2000)
   // await page.locator("(//span[contains(text(),'Cinema')])[1]").click()
    await page.getByText('Cinema',{exact:true}).click()
    await page.locator("//span[contains(text(),'Select Cinema')]").click()
    await page.locator('li').filter({ hasText: 'INOX The Marina Mall, OMR, Chennai' }).click()
    //await page.locator("//div[@id='date']//span[contains(text(),'Select Date')]").click()
    await page.locator("//span[contains(text(),'Sun')]").click()
    //await page.getByRole('listbox').getByText('CRAZY KALYANAM').click()
    //await page.getByText('CRAZY KALYANAM', { exact: true }).click();
    await page.locator("//li[@role='option']//span[normalize-space()='HAIKU']").click()
    await page.locator("(//span[contains(text(),'PM')])[2]").click()
    await page.getByRole('button', { name: 'Submit' }).click()
    await page.getByRole('button', { name: 'Accept' }).click()
    await page.locator("(//span[contains(@id,'F')])[5]").click()
    await page.locator("(//span[contains(@id,'F')])[4]").click()
    const seatNo1 = await page.locator("//p[contains(text(),'F12')]").innerText()
    console.log("Seat NO 1:",seatNo1)

    const seatNo2 = await page.locator("//p[contains(text(),'F13')]").innerText()
    console.log("Seat No 2",seatNo2)

    await expect(page.locator("//p[contains(text(),'F12')]")).toHaveText(seatNo1);
    await expect(page.locator("//p[contains(text(),'F13')]")).toHaveText(seatNo2);
  // Verifying total ticket amount
    const totalamt = await page.locator("//div[@class='grand-prices']").innerText()
    console.log("Total Amount",totalamt)  
    await expect(page.locator("//div[@class='grand-prices']")).toHaveText(totalamt)
    await page.getByRole('button', { name: 'Proceed' }).click();

    await page.waitForTimeout(5000)

})
