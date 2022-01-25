
//math problem using .reduced finding the total in array

const array = [1,2,3,4];
const reduced = array.reduce
  (function (prev, current) 
{
    return prev +current 
})
console.log(reduced) 

console.log('----------------------------------------------------')


function sumof(num1, num2) {
  let sumOfAns = num1 + num2;
  console.log(`Tmhe number ${num1} and ${num2} equals to ${sumOfAns}`);
}
sumof(2904, 3563);

console.log("--------------------------------------");

//multiply 3 numbers

function multiply(num1, num2, num3) {
  let totalAns = num1 * num2 * num3;
  console.log(
    `The numbers we multiplied ${[num1, num2, num3]} equal to ${totalAns}`
  );
}
multiply(19, 2345, 60);

// divide 6/7 and add 8 w template literal

function divideAndAdd(number1, number2, number3) {
  let totalAnswer = number1 / number2 + number3;
  console.log
    (`First I divided ${number1} by ${number2} then I added ${number3} and it gave me ${totalAnswer}`
  );
}
divideAndAdd(6, 7, 8);

console.log("----------------------------------------------------");

// function addition(num1,num2) {
//     return num1+num2}
//     console.log(addition(4,9))

console.log("----------------------------------------------------");

const herAge = 30;
const hisAge = 31;

function addition() {
  ttlAnswer = herAge + hisAge;
  console.log(`the total of Danielle and Jeremiahs ages are ${ttlAnswer}`);
}
addition();

console.log("----------------------------------------------------");
//without const 

function addtion(hrAge, hsAge) {
    totalAnswer = hrAge + hsAge;
    console.log(`the total of Danielle and Jeremiahs ages are ${totalAnswer}`);
  }
  addition(31,30);

  console.log("----------------------------------------------------");

  function defineAges(myAge,theirAge){
    DaniellesAge= myAge;
    JeremiahsAge=theirAge
    console.log(`Danielle and Jeremiahs ages are ${DaniellesAge} and ${JeremiahsAge} respectively.`)

  }
  defineAges(30,31)

 console.log('____________________________________________________')

 function exponentOfANumber(val1, powerOf){
     totalVal = val1 ** powerOf;
     console.log(`${val1} to the power of ${powerOf} equals ${totalVal}`)
 }
 exponentOfANumber(5,2)

 console.log('------------------------------------------------------')

  // get the subtotal for the items at register and get  2 bananas, 2 oranges @per item cost.
  
  let bananas = .49;
  let oranges = .50;
 
 
 function addUpFruits(){
   let total = bananas*2 + oranges*2;
   console.log(`The total amount comes out to ${total}`)
 }
 addUpFruits()

 console.log('--------------------------------------------------------------')



//add up amount of kids in array 1-5 using .reduce



const ageSumOfKids = [1,2,3,4,5];
const reduceKids = ageSumOfKids.reduce
(function (firstKid,lastKid )
{
  return firstKid+lastKid
})
console.log(reduceKids)


