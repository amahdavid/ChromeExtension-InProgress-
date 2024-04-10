import { commandMap } from "../assets/commandsList.js";

chrome.commands.onCommand.addListener(function (command) {
  const action = commandMap[command];
  if (action) {
    action();
  }
});
