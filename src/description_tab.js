// loadDescription creates the elements for the description tab

function loadDescription() {
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

  return descriptionWrapper;
}

export { loadDescription };