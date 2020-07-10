// loadHome creates the elements for the home tab

function loadHome() {
  const homeWrapper = document.createElement("div")
  homeWrapper.classList.add("home-wrapper");

  const homeBackground = document.createElement("div");
  homeBackground.classList.add("home-background");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");

  const home = document.createElement("p");
  home.classList.add("home");
  home.textContent = "Here at Liger's Pizzeria we bring you only the tastiest pizza."

  homeText.appendChild(home);
  homeWrapper.appendChild(homeBackground);
  homeWrapper.appendChild(homeText);

  tabColour();

  return homeWrapper;
}

function tabColour() {
  const contactTab = document.querySelector(".contact-tab");
  const homeTab = document.querySelector(".home-tab");
  const menuTab = document.querySelector(".menu-tab");

  if (contactTab === null) {
    return null;
  }
  
  contactTab.classList.remove("tab-active"); 
  homeTab.classList.add("tab-active");
  menuTab.classList.remove("tab-active");
}

export { loadHome };