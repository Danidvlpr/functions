let laptop = {
  name: "Apple MacBook Air",
  color: "Space Gray",
  price: 1100,
};
console.log(laptop.name); //Dot notation
console.log(laptop["name"]); //Bracket notation - be sure to wrap the property name in quotesconsole.log(laptop) //Will print the whole object
console.log(`My ${laptop.name} is ${laptop.color}`);

console.log("-------------------------------------");

//object to model real things in code
const person = {
  firstName: "Danielle",
  favFood: "Robin's Tourshi",
  favPerson: "Baby Jeremiah",
};

console.log(person.firstName);
console.log(
  `Hey my name is ${person.firstName} and I love ${person.favFood} \n and my favorite person on earth is ${person.favPerson} :)`
);

console.log("----------------------------------");

//customer puts an online publix order define the objects


const dairy = {
    milk: "whole",
    yogurt: "vanilla",
    chocolate: "dark",
};
const deliProducts = {
    chicken: "rotisarrie",
    deliMeat: "boarsHead",
    steaks: "frozen",
    cheese: ["manchego", "swiss", "parmasian"],
};

const snacks = {
    doritos: "cool ranch",
    cheetos: "hot cheetos",
    lays: "BBQ chips",
    pringles: "original",
};

const bakeryItem = {
    bread: ["rye", "wheat","hamburger buns"],
    cookies: "chocolate Chip",
    cake: "birthday"
};

let onlineShopperCart = [dairy,deliProducts,snacks];


//customer shops at publix decides she wants to remove only dairy products
//which items are being removed? make a variable (let) be the items we are removing

let itemsToRemove = [deliProducts.cheese, dairy];

function getDairyItemsOut() {
    console.log(itemsToRemove);
}
getDairyItemsOut();

//the shoppers wife wants to only buy cheese if they have manchego. 

let cheeseItems = ('manchego')
if (cheeseItems === deliProducts.cheese[0]){
    console.log(`There is ${cheeseItems}`)
}else {
    console.log(`we are out of ${cheeseItems}`)
}


