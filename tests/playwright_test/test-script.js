import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const extensionId = 'nnipdgnpmhjblcglpglehlfaopjmffen';

  // Load the unpacked extension using addInitScript
  await context.addInitScript(() => {
    chrome.runtime.getPackageDirectoryEntry(directoryEntry => {
      directoryEntry.getDirectory('ChromeExtension', {}, directoryEntry => {
        directoryEntry.file(fileEntry => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const script = document.createElement('script');
            script.textContent = reader.result;
            document.documentElement.appendChild(script);
          };
          reader.readAsText(fileEntry);
        });
      });
    });
  });

  const page = await context.newPage();
  await page.goto(`chrome-extension://${extensionId}/src/options/index.html`);

  // Perform other test actions as needed

  await browser.close();
})();
