let laptop = { 
    name: "Apple MacBook Air",
    color: "Space Gray",
    price: 1100
 };
console.log(laptop.name) //Dot notation
console.log(laptop["name"]) //Bracket notation - be sure to wrap the property name in quotesconsole.log(laptop) //Will print the whole object
console.log(`My ${laptop.name} is ${laptop.color}`)

console.log('-------------------------------------')


//object to model real things in code
const person={
    firstName: "Danielle",
    favFood: "Robin's Tourshi",
    favPerson: "Baby Jeremiah",
}

console.log(person.firstName)
console.log(`Hey my name is ${person.firstName} and I love ${person.favFood} \n and my favorite person on earth is ${person.favPerson} :)`)