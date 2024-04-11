function sortTabsAlphabetically(sortDirection) {
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

function navigateTabs(offset) {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        var currentIndex = tabs.findIndex((tab) => tab.id === activeTabs[0].id);
        var newIndex = currentIndex + offset;

        if (newIndex >= 0 && newIndex < tabs.length) {
          chrome.tabs.update(tabs[newIndex].id, { active: true });
        }
      }
    );
  });
}
