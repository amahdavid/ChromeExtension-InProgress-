const puppeteer = require("puppeteer");

describe("Extension Commands", () => {
  let browser;
  let page;
  let extensionId = "nnipdgnpmhjblcglpglehlfaopjmffen";

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      args: [
        `--disable-extensions-except=${__dirname}/../..`,
        `--load-extension=${__dirname}/../..`,
      ],
    });
    page = await browser.newPage();
    await page.goto(`chrome-extension://${extensionId}/src/options/index.html`);
  });

  afterAll(async () => {
    await browser.close();
  });

  // Test arrange_tabs_alphabetically_ascending command
  test("SortTabs_Ascending_HappyPath", async () => {
    await page.keyboard.press("Y", { modifiers: ["Control", "Shift"] });

    const tabs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".tab")).map((tab) =>
        tab.textContent.trim()
      );
    });
    expect(tabs).toEqual([...tabs].sort());
  });

  // Test arrange_tabs_alphabetically_descending command
  test("SortTabs_Descending_HappyPath", async () => {
    await page.keyboard.press("Z", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that tabs are arranged alphabetically in descending order
  });

  // Test move_tab_previous command
  test("SwitchTabs_Previous_HappyPath", async () => {
    await page.keyboard.press("P", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test move_tab_next command
  test("SwitchTabs_Next_HappyPath", async () => {
    await page.keyboard.press("O", { modifiers: ["Control", "Shift"] });
    // Add assertions here to verify that the active tab has changed
  });

  // Test unknown command
});
