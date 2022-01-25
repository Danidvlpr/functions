
let person = {
    firstName: 'Susana',
    age: 32,
    sayingHello() {
      console.log(`Hello ${person.firstName}`)
    }
  }
  person.sayingHello()

  console.log ('------------------------------------------------')


  // get the subtotal for the items at register and get  2 bananas, 2 oranges @per item cost.
  
 let bananas = .49;
 let oranges = .50;


function addUpFruits(){
  let total = bananas*2 + oranges*2;
  console.log(`The total amount comes out to ${total}`)
}
addUpFruits()


// create a grocery list of items and get total

const produce= ['2 lettuce heads','5 tomatoes','6 cucumbers']
const restOfItems=['1 bag of rice','2 bottles of oliveoil','3 loafs of bread']

let lettuce = .30
let tomato = .50
let cucumber = .25
let rice= 1.45
let oliveoil= 3.00
let bread= 2.50

function addUpCart(){
  let cart = lettuce*2+ tomato*5+ cucumber*6 + rice + oliveoil*2 +bread*3
  console.log(`The total came out to ${cart}`)
}


addUpCart()