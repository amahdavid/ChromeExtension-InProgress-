const puppeteer = require("puppeteer");
const { sortTabsAlphabetically, navigateTabs } = require ("../../src/utils/helpers");

describe("Extension Commands", () => {
  let browser;
  let chromeExtensionPage;
  let pages = [];
  let extensionId = "nnipdgnpmhjblcglpglehlfaopjmffen";

  const urls = [
    "https://leetcode.com/explore/",
    "https://example.com/",
    "https://www.wikipedia.org/",
    "https://www.google.ca/forms/about/"
  ];

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      args: [
        `--disable-extensions-except=${__dirname}/../..`,
        `--load-extension=${__dirname}/../..`,
      ],
    });
    for (const url of urls) {
      const page = await browser.newPage();
      await page.goto(url);
      pages.push(page);
    }

    chromeExtensionPage = await browser.newPage();
    await chromeExtensionPage.goto(
      `chrome-extension://${extensionId}/src/options/index.html`
    );
  });

  afterAll(async () => {
    for (const page of pages) {
      await page.close();
    }
    await chromeExtensionPage.close();
    await browser.close();
  });

  // Test sortTabsAlphabetically command
  test("SortTabs_Ascending_HappyPath", async () => {
    sortTabsAlphabetically("asc");
    // Get the titles of all open tabs
    const tabTitles = await Promise.all(
      pages.map(async (page) => {
        return await page.title();
      })
    );

    // Check if the tab titles are sorted alphabetically
    const sortedTabTitles = tabTitles.slice().sort();
    expect(tabTitles).toEqual(sortedTabTitles);
  });

  // Test arrange_tabs_alphabetically_descending command
  test("SortTabs_Descending_HappyPath", async () => {
    await chromeExtensionPage.keyboard.press("Z", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that tabs are arranged alphabetically in descending order
  });

  // Test move_tab_previous command
  test("SwitchTabs_Previous_HappyPath", async () => {
    await chromeExtensionPage.keyboard.press("P", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test move_tab_next command
  test("SwitchTabs_Next_HappyPath", async () => {
    await chromeExtensionPage.keyboard.press("O", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test unknown command
});
