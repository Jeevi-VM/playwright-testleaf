import{chromium, test} from "@playwright/test"
test('launch browser',async()=>{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext();
    
    const page=await context.newPage()
})