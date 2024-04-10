export function sortTabsAlphabetically(sortDirection) {
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

export function navigateTabs(offset) {
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
      var currentIndex = tabs.findIndex(tab => tab.id === activeTabs[0].id);
      var newIndex = currentIndex + offset;

      if (newIndex >= 0 && newIndex < tabs.length) {
        chrome.tabs.update(tabs[newIndex].id, { active: true });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var arrangeButton = document.getElementById("arrange-btn");
  var nextButton = document.getElementById("next-btn");
  var previousButton = document.getElementById("previous-btn");

  arrangeButton.addEventListener("click", function () {
    var sortDirection = document.getElementById("sort-direction").value;
    sortTabsAlphabetically(sortDirection);
  });

  nextButton.addEventListener("click", function () {
    navigateTabs(1);
  });

  previousButton.addEventListener("click", function () {
    navigateTabs(-1);
  });
});
