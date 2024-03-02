import { test, expect } from '@playwright/test'

const url = 'http://localhost:3000'

test('Test end to end', async ({ page }) => {
  // Verify that the page starts correctly at localhost:3003
  await page.goto(url)
  await expect(page).toHaveURL(url)

  // Verify that there is an input with "Nunca dejes de buscar" placeholder
  const input = await page.waitForSelector('input[placeholder="Nunca dejes de buscar"]')

  await expect(input).not.toBeNull()

  // Fill the input with the value "telas" and press enter
  await input.fill('telas')
  await input.press('Enter')

  // Verify redirection to the correct search page
  await page.waitForURL(`${url}/items?search=telas`)
  await expect(page).toHaveURL(`${url}/items?search=telas`)

  // Verify the presence of items section
  const itemList = await page.waitForSelector('#items-section')

  await expect(itemList).not.toBeNull()

  // Click on the first item
  const firstItem = await itemList.waitForSelector('a')

  await expect(firstItem).not.toBeNull()
  await firstItem.click() // Click on the first element

  // Verify redirection to the product detail
  await page.waitForURL(`${url}/items/MLA1572341900`)
  await page.waitForLoadState()
  await expect(page).toHaveURL(`${url}/items/MLA1572341900`)

  // Wait to find the text "Product Description" and a img html tag
  await expect(page.locator('h3')).toContainText('Descripción del producto')
  await page.waitForSelector('img')
})
