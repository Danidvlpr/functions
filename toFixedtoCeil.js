
//const usd=95 to pesos w .tofixed(2)

let amountDollars = 95;
let pesos = 20.47;

function currencyConverter(curr1, curr2) {
  conversion = (curr1 * curr2);
  console.log(` ${curr1} dollars is equivalent to ${conversion.toFixed(2)} pesos`);
  
}
currencyConverter(amountDollars, pesos);

console.log('----------------------------------------------------')

//convert shekel to pound
let shekl = 95;
let pnd = 0.23;

function convertShklTopnd(shekel, pound) {
convertRate = (shekel * pound);
console.log(`${shekel} shekels is equal to ${convertRate} pounds `)
}
convertShklTopnd(shekl,pnd)

console.log('---------------------------------------------------')

//convert rupee to frank

let rupee = 300;
let frank = 0.012;

function convertRupeeToFrank (rup,frk){
convrRate = (rup*frk);
console.log(`${rup} rupee is equal to ${convrRate} franks`)
}
convertRupeeToFrank(rupee,frank)

console.log('----------------------------------------------')


//convert rupee to frank with Math.ceil

let rupe= 300;
let frnk= 0.012;

function convertRupeTofrnk (rupe,frnkk){
  convrtRate = (rupe * frnkk) ;

console.log(`${rupe} rupee is equal to ${Math.ceil(convrtRate)} frank`)
}
convertRupeTofrnk(rupe,frnk)

console.log('-------------------------------------------------')

//convert shkl to pound w. Math.ceil
let shkl= 95;
let pound = 0.23;

function convertShkToPnd(shkl1, pound2) {
    
conversionRate = (shkl1 * pound2);
console.log(`${shkl1} shekels is equal to ${Math.ceil(conversionRate)} pound `)

}
convertShkToPnd(shkl,pound);

console.log('----------------------------------------------------')

// convert korean won to thai baht

let koreanWon= 96;
let thaiBaht = 0.028;

function convertWonToBaht(won,baht){
  rate= (won*baht);
  console.log(`${won} Korean is equal to ${rate} thai baht`)

}
convertWonToBaht(koreanWon,thaiBaht);

console.log('------------------------------------------')

//convert korean won to thai baht to whole number Math.ceil
//multiply instead of / bc its higher than decimal amount

let korWon = 96;
let thaiB= 0.028;

function convertWnToBaht(kor,thai){
  theRateOfReturn=(kor*thai)
  console.log(`${kor} korean is equal to ${Math.ceil(theRateOfReturn)} thai`)
  
}
convertWnToBaht(korWon,thaiB)

console.log('-------------------------------------------------')

//const tempC= 8.5 function to convert c to f then output complete sentence

//google function to convert celsius to farenheit

let tempC = 8.5;

function convertCtoF(tempInC) {
  return tempInC * 1.8 + 32;
}

console.log(`${tempC}°C is equal to ${convertCtoF(tempC)}°F`);