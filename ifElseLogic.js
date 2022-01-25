//if else logic

animal = "dog";
if (animal === "dog") {
  console.log("woof");
} else {
  console.log("meow");
}

console.log('------------------------------------------')

let hour = 10;
if (hour < 11) {
  console.log("Good morning!");
} else if (hour < 17) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

console.log('------------------------------------------')

const dogName= "squishy";
let times = 9;
if (times > 9) {
    console.log(`Im running late ${dogName} its past ${times}, \n ill make it up to you!`);
}else { (times < 9)
    console.log(`Okay ${dogName} get your leash!`)};


  console.log ('-----------------------------------------')

  //uber eats on its way they said 25 min. if they arrive on time leave big tip
  

  let Uber = 25;
  if (Uber <=25) {
    console.log(`Yay youre here! heres $20!`);
  } else if (Uber> 25) {
    console.log(`Now I am hangry!`);
  } 

  console.log('-------------------------------------------')

// a friend tells you starbucks opens at 11am on thanksgiving but they are closed for the holiday. create a not true statement

let starbucks = "open at 11am";
if (starbucks !== "open at 11am") {
  console.log("come in we are open");
} else {
  console.log("Sorry we are closed");
}

//find out if shoe size is available

let shoeSize = 8;
if (shoeSize < 7){
  console.log ('we are out of your size');
} else  {
 console.log('what color shoe would you like?')
}