import { initialLoad } from './initial_load.js';
import { loadContact } from './contact_tab.js';
import { loadDescription } from './description_tab';

initialLoad();

const tabController = (() => {
  const _tabContentWrapper = document.querySelector(".tab-content-wrapper")
  const _descriptionTab = document.querySelector(".description-tab");
  const _contactTab = document.querySelector(".contact-tab");


  const _changeTab = (tab) => {
    _tabContentWrapper.innerHTML = "";
    const tabContent = tab();
    _tabContentWrapper.appendChild(tabContent);
  }

  _descriptionTab.addEventListener("click", () => {_changeTab(loadDescription)});
  _contactTab.addEventListener("click", () => {_changeTab(loadContact)});

  return {
  }
})();

