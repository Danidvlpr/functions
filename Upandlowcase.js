//1. Converts a string to uppercase letters:
//let str = "WHAT a TIME to BE ALIVE!"

let string = "What a TIME to be Alive!";
function makeUppercase() {
  console.log(string.toUpperCase());
}
makeUppercase();

//convert string to lower case letters:
// let sentence= "THIS IS HARD WORK YOU GOT THIS"

let sentence = "THIS IS HARD WORK YOU GOT THIS!";
function toLowercase() {
  console.log(sentence.toLowerCase());
}
toLowercase();

// convert string to lower case

let string1 = "no better time than the present"
function forceUpperCase(){
    console.log(string1.toUpperCase());
}
forceUpperCase();

console.log('---------------------------------------------')

// let first line be uppercase and second be lower

let firstS = "we Can MaKe it if we tRy"
let secondS = "IF WE DONT tRy wE dOnt succeed"

function twoSentences (){
    console.log(firstS.toUpperCase())
    console.log(secondS.toLowerCase())
}
twoSentences()

//write your age in 10 years and display your name in all uppercase

let myName = "danielle"

function myAgein10(myAge){
    myTotalAge = myAge + 10
    console.log (`in 10 years my age will be ${myTotalAge} and my name is \n ${myName.toUpperCase()} scream it for the world to hear!`)
}
myAgein10(30)


//make abas name in uppercase and write I love my papi

let abasName = 'papi'

function allUpperCase(){
  console.log(`I love my ${abasName.toUpperCase()}`)
}

allUpperCase();