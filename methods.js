
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