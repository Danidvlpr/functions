// Use the keyword function followed by the name of the function.
// After the function name, open and close parentheses.
// After parenthesis, open and close curly braces.
// Within curly braces, write your lines of code.

function myDogsInfo(firstName,age,gender,favoriteToy){
console.log(`my Dogs name is ${firstName}`)
console.log(`my dog ${firstName} is ${age} years old`)
console.log(`${firstName} is a ${gender} and loves their toy ${favoriteToy}`)
}
console.log("------------------------------------------------------------")

myDogsInfo('skip',3,'girl','elmo')

function aboutMe(name,nickName,ageCount,genderSpecific,nationality){
    console.log(`Hello everyone, my name is ${name} but you can call me ${nickName} `)
    console.log(`I am ${ageCount} years old.`)
    console.log(`I identify as ${genderSpecific} and my nationality is ${nationality}`)
}
aboutMe('Danielle','Dani',30,'female','Israeli')

console.log("------------------------------------------------------------")

function sumof(num1,num2){
    let sumOfAns = num1+num2
    console.log(`The number ${num1} and ${num2} equals to ${sumOfAns}` )
    
}
sumof(1,5)

console.log('--------------------------------------')

//const usd=95 write a function to convert USD to another currency

let usd = 95
let pesos = 20

function currencyConverter(curr1,curr2){
    conversion = curr1 * (curr1/curr2)
    console.log(` ${curr1} dollars is equivalent to ${conversion} pesos`)
}

currencyConverter(usd, pesos)

//const tempC= 8.5 function to convert c to f then output complete sentence

let tempC= 8.5

function convertToFarenheight(celsius){
    return (celsius *1.8)+32
}

console.log(`${tempC} celsius is ${convertToFarenheight(tempC)} farenheight`)