function sortTabsAlphabeticallyBackGround(sortDirection) {
  chrome.tabs.query({}, function (tabs) {
    tabs.sort(function (a, b) {
      if (sortDirection === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    tabs.forEach(function (tab, index) {
      chrome.tabs.move(tab.id, { index: index });
    });
  });
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === "arrange_tabs_alphabetically_ascending") {
    sortTabsAlphabeticallyBackGround("asc");
  } else if (command === "arrange_tabs_alphabetically_descending") {
    sortTabsAlphabeticallyBackGround("desc");
  }
});
