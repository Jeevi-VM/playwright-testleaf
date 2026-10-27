import test, { Page } from "@playwright/test";

test('Window handling',async({page,context})=>{
    await page.goto('https://www.leafground.com/window.xhtml')
      await page.waitForTimeout(2000)
    //   await page.getByText('Open',{exact:true}).click()
    //   await page.waitForTimeout(5000)

    const [parentPage] = await Promise.all([context.waitForEvent('page'),
        page.getByText('Open',{exact:true}).click()]) 
         await page.waitForTimeout(5000)
    const count = parentPage.context().pages()
    console.log(count.length)
    for(let i=0; i<count.length; i++){
        await page.waitForLoadState('domcontentloaded')


        const title = await count[i].title()
        console.log(title);
    }

    
    

    await parentPage.getByPlaceholder('E-mail Address', {exact:true}).fill('dummy@gmail.com')
    await parentPage.getByLabel('Message').fill("Playwright window handling")
    await page.waitForTimeout(5000)

})