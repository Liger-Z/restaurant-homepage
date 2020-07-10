// loadMenu creates the elements for the menu tab

function loadMenu() {


  const contactTab = document.querySelector(".contact-tab");
  const homeTab = document.querySelector(".home-tab");
  const menuTab = document.querySelector(".menu-tab");
  contactTab.classList.remove("tab-active");
  homeTab.classList.remove("tab-active");
  menuTab.classList.add("tab-active");

  return menuWrapper;
};

function displayMenu(wrapper) {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  for (let i=0; i < pizzaStorage.length; i++) {

  }
}

const pizzaConstructor = (name, ingredients, price, image) => {
  const div = document.createElement('div');
  div.classList.add("pizza-wrapper");
  return { name, ingredients, price, image, div }
};

let pizzaStorage = [];

const pepperoni = pizzaConstructor("Pepperoni", "Tomato Base, Mozzarella, Pepperoni", 10, "");
const meatLovers = pizzaConstructor("Meat Lovers", "Tomato Base, Mozzarella, Ham, Beef, Pepperoni, BBQ Sauce", 12, "");
const butterChicken = pizzaConstructor("Butter Chicken", "Tomato Base, Mozzarella, Chicken, Butter Chicken Sauce", 12, "");
const tripleCheese = pizzaConstructor("Triple Cheese", "Tomato Base, Mozzarella, Provolone, Parmesan", 9, "");

pizzaStorage.push(pepperoni, meatLovers, butterChicken, tripleCheese);

export { loadMenu };