import { commandMap } from './src/utils/helpers.js';

chrome.commands.onCommand.addListener(function (command) {
  const action = commandMap[command];
  if (action) {
    action();
  }
});
