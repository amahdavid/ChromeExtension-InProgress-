function sortTabsAlphabetically() {
  chrome.tabs.query({}, function (tabs) {
    tabs.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });

    tabs.forEach(function (tab, index) {
      chrome.tabs.move(tab.id, { index: index });
    });
  });
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === "arrange_tabs_alphabetically") {
    sortTabsAlphabetically();
  }
});
