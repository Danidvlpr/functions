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

dogName= "squishy";
let times = 9;
if (times > 9) {
    console.log(`Im running late ${dogName} its past ${times}, \n ill make it up to you!`);
}else if (times < 9){
    console.log(`Okay ${dogName} get your leash!`); 
}