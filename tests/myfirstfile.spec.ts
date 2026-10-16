import{chromium, test} from "@playwright/test"
test('launch browser',async=>{
    const browser=chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=context.newPage()
})