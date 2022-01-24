//If we want they key in deliproducts
// use method Object.keys(deliProducts)

dairy = {
  chocolate: "dark",
  milk: "skim",
};
deliProducts = {
  cheese: "parmesan",
  deliMeat: "BoarsHead",
};

let itemsToRemove = [Object.keys(deliProducts), dairy];
console.log(itemsToRemove);

//if we want the value of lettuce in the produce array
//array is a list of single value things

produce = ["tomato", "cucumber", "lettuce"];
console.log(produce[2]);

//if we want to find the gender for the object dog

dog = {
    firstName: 'skip',
    age: 3,
    gender: 'female'
}
console.log(dog.gender)

//if I want i love my dog skip always object.firstName

console.log(`I love my dog ${dog.firstName}`)

//.push to add a number to the end

const numbers = [1,2,3,4,];
numbers.push(5);
console.log(numbers);

//.pop removes last word

let fruits = ['apple','banana','orange']
let myFruit= fruits.pop()
console.log(fruits)

//.shift like .pop but first word vs last
let soda = ['coke','sprite','7up']
let mySoda = soda.shift()
console.log(soda)

//.unshift adds a value to beginning of an array

let chips = ['cheetos','doritos','lays']
let mychips = chips.unshift('hot cheetos')
console.log(chips)

//spread operator add ... to add the countries from the top to the list for console log
// if u just do countries it will have 2 diff arrays

const countries =['argentina','venezuela','colombia'];
const moreCountries = ['usa','france','italy',...countries]
console.log(moreCountries)

//or you can do .push when ur array is not being listed and u have to loop from somewhere else
//when its hard to find the list (more frequently used)

const animals = ['dog','cat','horse'];
const moreAnimals = ['sealion', 'shark','dolphin']
animals.push(...moreAnimals)
console.log(animals)


//when u want to find the biggest number lets say they r decimals or too many #

console.log(Math.max(1,2,5))

//wehn u want to find smallest number min

console.log(Math.min(2,3,5))

// math.floor answer: 5
console.log(Math.floor(5.2))

//math.round answer:5
console.log(Math.round(5.3))

//math ceil answer:8
console.log(Math.ceil(8.7))

//indexOf returns the first index(number) of the string
const myName = 'Danielle';
console.log(myName.indexOf('D'))