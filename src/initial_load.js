import { loadDescription } from "./description_tab";

/* initialLoad creates all the html elements that are needed the first
time the page is loaded.
*/

function initialLoad() {
  const contentDiv = document.querySelector("#content");

  const siteHeader = document.createElement("header");
  siteHeader.classList.add("site-header");
  const siteTitle = document.createElement("h1");
  siteTitle.classList.add("site-title");
  siteTitle.textContent = "Liger's Pizzeria";
  const pizzaIcon = document.createElement("img");
  pizzaIcon.classList.add("pizza-icon");
  pizzaIcon.src = "images/pizza_icon.png";
  pizzaIcon.alt = "Icon of a pizza slice";
  siteHeader.appendChild(siteTitle);
  siteHeader.appendChild(pizzaIcon);

  const tabWrapper = document.createElement("div");
  tabWrapper.classList.add("tab-wrapper");
  const descriptionTab = document.createElement("button");
  descriptionTab.classList.add("description-tab");
  descriptionTab.classList.add("tab-button");
  descriptionTab.textContent = "Description";
  const menuTab = document.createElement("button");
  menuTab.classList.add("menu-tab");
  menuTab.classList.add("tab-button");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("button");
  contactTab.classList.add("contact-tab");
  contactTab.classList.add("tab-button");
  contactTab.textContent = "Contact";

  tabWrapper.appendChild(descriptionTab);
  tabWrapper.appendChild(contactTab);
  tabWrapper.appendChild(menuTab);

  const tabContentWrapper = document.createElement("div");
  tabContentWrapper.classList.add("tab-content-wrapper")

  const descriptionWrapper = loadDescription();
  tabContentWrapper.appendChild(descriptionWrapper);

  contentDiv.appendChild(siteHeader);
  contentDiv.appendChild(tabWrapper);
  contentDiv.appendChild(tabContentWrapper);
};

export { initialLoad };
