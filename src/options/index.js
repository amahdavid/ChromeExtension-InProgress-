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

document.addEventListener("DOMContentLoaded", function () {
  var arrangeButton = document.getElementById("arrange-btn");
  arrangeButton.addEventListener("click", function () {
    var sortDirection = document.getElementById("sort-direction").value;
    sortTabsAlphabetically(sortDirection);
  });
});
