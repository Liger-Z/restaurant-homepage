import { initialLoad } from './initial_load.js';
import { loadContact } from './contact_tab.js';
import { loadHome } from './home_tab';

initialLoad();

const tabController = (() => {
  const _tabContentWrapper = document.querySelector(".tab-content-wrapper")
  const _homeTab = document.querySelector(".home-tab");
  const _contactTab = document.querySelector(".contact-tab");


  const _changeTab = (tab) => {
    _tabContentWrapper.innerHTML = "";
    const tabContent = tab();
    _tabContentWrapper.appendChild(tabContent);
  }

  _homeTab.addEventListener("click", () => {_changeTab(loadHome)});
  _contactTab.addEventListener("click", () => {_changeTab(loadContact)});

  return {
  }
})();

