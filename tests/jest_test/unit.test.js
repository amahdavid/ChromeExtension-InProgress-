const puppeteer = require('puppeteer');

describe('Extension Commands', () => {
  let browser;
  let page;
  let extensionId = 'nnipdgnpmhjblcglpglehlfaopjmffen';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // Set to true for headless mode
      slowMo: 50, // Slow down Puppeteer operations by 50ms
    });
    page = await browser.newPage();
    await page.goto(`chrome-extension://${extensionId}/src/options/index.html`);
  });

  afterAll(async () => {
    await browser.close();
  });

  // Test arrange_tabs_alphabetically_ascending command
  it('SortTabs_Ascending_HappyPath', async () => {
    await page.keyboard.press('Y', { modifiers: ['Control', 'Shift'] });
    // Add assertions here to verify that tabs are arranged alphabetically in ascending order
  });

  // Test arrange_tabs_alphabetically_descending command
  it('SortTabs_Descending_HappyPath', async () => {
    await page.keyboard.press('Z', { modifiers: ['Control', 'Shift'] });
    // Add assertions here to verify that tabs are arranged alphabetically in descending order
  });

  // Test move_tab_previous command
  it('SwitchTabs_Previous_HappyPath', async () => {
    await page.keyboard.press('P', { modifiers: ['Control', 'Shift'] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test move_tab_next command
  it('SwitchTabs_Next_HappyPath', async () => {
    await page.keyboard.press('O', { modifiers: ['Control', 'Shift'] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test unknown command
});
