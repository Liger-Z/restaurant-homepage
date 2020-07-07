import { siteHeader, descriptionWrapper } from './initial_load.js'

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(siteHeader);
contentDiv.appendChild(descriptionWrapper);
