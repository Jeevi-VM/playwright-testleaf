import test, { expect } from "@playwright/test";
test("learn assertion",async({page})=>{
    await page.goto('https://leafground.com/input.xhtml')
    await expect(page.locator(''))

}
)