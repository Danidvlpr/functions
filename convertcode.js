//const tempC= 8.5 function to convert c to f then output complete sentence

//google function to convert celsius to farenheit

let tempC = 8.5;

function convertCtoF(tempInC) {
  return tempInC * 1.8 + 32;
}

console.log(`${tempC}°C is equal to ${convertCtoF(tempC)}°F`);

console.log("---------------------------------------------------------------");

//const usd=95 write a function to convert USD to another currency and do to nearest decimal

let dollars = 95;
let pesos = 20.517;

function currencyConverter(curr1, curr2) {
  conversion = curr1 * (curr1 / curr2);
  console.log(` ${curr1} dollars is equivalent to ${conversion.toFixed(2)} pesos`);
  
}

currencyConverter(dollars, pesos);



//const usd=95 write a function to convert USD to another currency

const usd = 95;

function convertUSDtoEuro(howEverManyDollarsIHave) {
  const euroToUsdConversionRate = 0.71;
  return howEverManyDollarsIHave * euroToUsdConversionRate;
}

const myEuros = convertUSDtoEuro(usd);
console.log(`${usd} USD is equivalent to ${myEuros} Euro`);

console.log('-----------------------------------------------------------------')

//const dollar=100 write a function to convert dollar to shekel

const dollar =100;

function convertUSDtoShekel(myDollarAmount){
const shekelToUsdConversionRate = 3.14;
return myDollarAmount * shekelToUsdConversionRate;

}
const myShekels = convertUSDtoShekel(dollar); 
console.log(`${dollar} USD is equivalent to ${myShekels} shekels`);