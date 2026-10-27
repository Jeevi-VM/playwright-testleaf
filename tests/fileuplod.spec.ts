import test, { Page } from "@playwright/test";

test('fileuplod Assignment', async({page})=>{
    await page.goto("https://www.naukri.com/registration/createAccount")
    let fUpload = page.locator('//input[@class="uploadAction"]')
    fUpload.setInputFiles('data/Testfile.png')

    await page.waitForTimeout(5000)
})