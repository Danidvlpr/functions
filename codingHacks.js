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