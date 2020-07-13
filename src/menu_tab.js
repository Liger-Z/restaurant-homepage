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
    let div = pizzaStorage[i].div;
    
    let name = document.createElement("p");
    name.textContent = pizzaStorage[i].name;
    name.classList.add("pizza-name");

    let ingredients = document.createElement("p");
    ingredients.textContent = pizzaStorage[i].ingredients;
    ingredients.classList.add("pizza-ingredients");

    let price = document.createElement("p");
    price.textContent = `$${pizzaStorage[i].price}`;
    price.classList.add("pizza-price");
    
    div.appendChild(name);
    div.appendChild(ingredients);
    div.appendChild(price);
    menuWrapper.appendChild(div);
  }
  
  return menuWrapper;
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
const supreme = pizzaConstructor("Supreme", "Tomato Base, Onion, Mozzarella, Mushrooms, Capsicum, Black Olives, Beef, Meatballs, Salami", 14, "");

pizzaStorage.push(pepperoni, meatLovers, butterChicken, tripleCheese, supreme);

const menuWrapper = displayMenu();

export { loadMenu };