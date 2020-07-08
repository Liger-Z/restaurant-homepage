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
  const blurbTab = document.createElement("button");
  blurbTab.classList.add("blurb-tab");
  blurbTab.classList.add("tab-button");
  blurbTab.textContent = "Blurb";
  const menuTab = document.createElement("button");
  menuTab.classList.add("menu-tab");
  menuTab.classList.add("tab-button");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("button");
  contactTab.classList.add("contact-tab");
  contactTab.classList.add("tab-button");
  contactTab.textContent = "Contact";

  tabWrapper.appendChild(blurbTab);
  tabWrapper.appendChild(contactTab);
  tabWrapper.appendChild(menuTab);


  const descriptionWrapper = document.createElement("div")
  descriptionWrapper.classList.add("description-wrapper");
  const descriptionBackground = document.createElement("div");
  descriptionBackground.classList.add("description-background");
  const descriptionText = document.createElement("div");
  descriptionText.classList.add("description-text");
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "Here at Liger's Pizzeria we bring you only the tastiest pizza."
  descriptionText.appendChild(description);
  descriptionWrapper.appendChild(descriptionBackground);
  descriptionWrapper.appendChild(descriptionText);

  contentDiv.appendChild(siteHeader);
  contentDiv.appendChild(tabWrapper);
  contentDiv.appendChild(descriptionWrapper);
};

export { initialLoad };
