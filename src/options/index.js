import {sortTabsAlphabetically, navigateTabs} from "../utils/actions.js";

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
