// import { navigateTabs, sortTabsAlphabetically } from "../options/index.js";

export const commandMap = {
  arrange_tabs_alphabetically_ascending: () => sortTabsAlphabetically("asc"),
  arrange_tabs_alphabetically_descending: () => sortTabsAlphabetically("desc"),
  move_tab_next: () => navigateTabs(1),
  move_tab_previous: () => navigateTabs(-1),
};
