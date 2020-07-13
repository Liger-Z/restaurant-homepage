// loadHome creates the elements for the home tab

function loadHome() {
  const homeWrapper = document.createElement("div")
  homeWrapper.classList.add("home-wrapper");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");

  const home = document.createElement("p");
  home.classList.add("home");
  home.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis dapibus nisl, 
  vel viverra nisi blandit eget. Morbi lobortis in massa a viverra. Phasellus sit amet dictum risus. 
  Nulla facilisi. Vivamus bibendum, enim ac fermentum ultricies, augue leo mollis erat, tempus feugiat nisl ipsum vitae mi. 
  Etiam pretium, metus blandit malesuada tincidunt, elit lectus consectetur enim, non euismod sem turpis non orci. 
  Sed id lacus ut risus porta lacinia. Morbi elit dui, faucibus ornare cursus sit amet, tristique sed quam. Praesent sed laoreet libero, eu eleifend nunc. 
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc et malesuada felis. 
  In auctor ligula vitae ligula scelerisque, sed sollicitudin diam pulvinar.`

  const pizzaImageWrapper = document.createElement("div");
  pizzaImageWrapper.classList.add("pizza-image-wrapper");
  const pizzaImage = document.createElement("img");
  pizzaImage.src = "images/pizza.jpg";
  pizzaImage.classList.add("pizza-image")
  pizzaImageWrapper.appendChild(pizzaImage);


  homeText.appendChild(home);
  homeWrapper.appendChild(homeText);
  homeWrapper.appendChild(pizzaImageWrapper);

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