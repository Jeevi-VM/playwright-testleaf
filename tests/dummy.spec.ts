import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pvrcinemas.com/');
  await expect(page.getByRole('img', { name: 'PVR Logo' })).toBeVisible();
  await page.locator('span').nth(4).click();
  await page.locator('div:nth-child(7) > .cities-names > .cities-overlay').dblclick();
  await page.getByText('Cinema', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Select Cinema' }).click();
  await page.locator('li').filter({ hasText: 'PVR Sathyam Royapettah Chennai' }).click();
  await page.locator('li').filter({ hasText: 'Sun, 18 Oct' }).click();
  await page.locator('li').filter({ hasText: 'DRONES' }).click();
  await page.locator('span').filter({ hasText: 'Select Timing' }).click();
  await page.locator('span').filter({ hasText: 'Select Timing' }).click();
  await page.getByText(':50 PM').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByText('16').nth(5).click();
  await page.getByText('Booking SummaryDRONESUA 13+').click();
  await expect(page.locator('section')).toContainText('218.02');
  await page.getByRole('heading', { name: 'DRONES' }).click();
  await expect(page.getByRole('heading', { name: 'DRONES' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^E16$/ }).nth(1).click();
  await expect(page.getByRole('img', { name: 'PVR Logo' })).toBeVisible();
  await page.getByRole('button', { name: 'Proceed' }).click();
});


import test, { Page } from "@playwright/test";


test('Handling multiple windows',async({page,context})=>{
    await page.goto('https://leafground.com/window.xhtml')


    //playwright stats listening for new tab and immediately perform the click action
   const [parentPage] = await Promise.all([context.waitForEvent('page'),
        page.getByText('Open Multiple',{exact:true}).click()]) 


       // console.log(parentPage);


       const count = parentPage.context().pages(); //Returns all open pages in the context.


       console.log(count.length); //total no of pages


       //variables used to store specific child windows


       let dashboard : Page | undefined
       let webtable : Page | undefined


       for(let i=0; i<count.length; i++){
        await page.waitForLoadState('domcontentloaded')


        const title = await count[i].title()
        console.log(title);
        
        //if title matches dashboard
        //store the page object i dashboard variable


        if(title==='Dashboard'){
            dashboard = count[i]
        }else if(title === 'Web Table'){
            webtable =count[i]
        }
       }


       //console.log(dashboard);
       
       
       await dashboard?.getByPlaceholder('E-mail Address',{exact:true}).fill('support@testleaf.com')


       await webtable?.getByPlaceholder('Search',{exact:true}).fill('Russia')


       await page.waitForTimeout(3000)
       
})




import test, { expect } from "@playwright/test";
import { log } from "console";
import path from "path";

test('Learn to upload file using input<type=file>',async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')

    let fUpload = page.locator('(//input[@type="file"])[1]')
    fUpload.setInputFiles('Data/Qeagle Logo.jpeg')

    //await page.waitForTimeout(2000)
let fuploadAssertion = await page.locator('[class="ui-fileupload-filename"]').innerText()
console.log(fuploadAssertion);

await page.waitForTimeout(3000)

//retry assertion
await expect(page.locator('[class="ui-fileupload-filename"]')).toContainText('Qeagle Logo.jpeg 10.6 KB')

})

test.only('to upload file using event listener',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    //create event listener

    let fileUploadRef = page.waitForEvent('filechooser') 

    //trigger click action
    await page.locator('[id="drag-drop-upload"]').click()

    //resolve the promise of event listener

    const upload = await fileUploadRef
//relative path
    //await upload.setFiles('Data/Testleaf Logo.jpeg')

    //absolute path
    await upload.setFiles(path.join(__dirname,'../../../Data/Qeagle Logo.jpeg'))
    console.log(__dirname);//C:\Users\Admin\OneDrive - TestLeaf Software Solutions Private Limited\Documents\PW_WD_OCT_26\tests\Week4\Day4

    //retry assertion

    await expect(page.locator("//span[text()='Qeagle Logo.jpeg']")).toHaveText('Qeagle Logo.jpeg')
    
    //await expect(page.locator("//span[text()='Qeagle Logo.jpeg']")).toBeAttached()

})