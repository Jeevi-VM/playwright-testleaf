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
