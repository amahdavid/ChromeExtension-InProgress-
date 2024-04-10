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

document.addEventListener("DOMContentLoaded", function () {
  var arrangeButton = document.getElementById("arrange-btn");
  arrangeButton.addEventListener("click", function () {
    sortTabsAlphabetically();
  });
});
