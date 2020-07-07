/* initial_load creates all the html elements that are needed the first
time the page is loaded.
*/

const siteHeader = document.createElement("header");
siteHeader.classList.add("site-header");
const siteTitle = document.createElement("h1");
siteTitle.classList.add("site-title");
siteTitle.textContent = "Liger's Pizzeria";
const pizzaIcon = document.createElement("img");
pizzaIcon.src = "images/pizza_icon.png";
pizzaIcon.height = "80px";
pizzaIcon.alt = "Icon of a pizza slice";
siteHeader.appendChild(siteTitle);
siteHeader.appendChild(pizzaIcon);

const descriptionWrapper = document.createElement("div")
descriptionWrapper.classList.add("description-wrapper");
const descriptionBackground = document.createElement("div");
descriptionBackground.classList.add("description-background");
const descriptionText = document.createElement("div");
descriptionText.classList.add("description-text");
const description = document.createElement("p");
description.classList.add("description");
description.textContent = "At Liger's Pizzeria we bring you only the freshest pizza."
descriptionText.appendChild(description);
descriptionWrapper.appendChild(descriptionBackground);
descriptionWrapper.appendChild(descriptionText);

export { siteHeader, descriptionWrapper };