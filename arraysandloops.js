const arr = [5, 8, 7, 12, 13, 17, 22];

function addUpEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(addUpEvens(arr));

console.log("....................................");

//write a function to calculate and return the total tips and then output the total

const tips = [5, 8, 13, 2, 14, 27, 9, 18];

function addUpTips(arrayOfTips) {
  let total = 0;
  for (let i = 0; i < arrayOfTips.length; i++) {
    total = total + arrayOfTips[i];
  }
  return total;
}

console.log("total tips:", addUpTips(tips));

console.log("....................................");

// find the min and max by sorting function

const array = [3, 2, 1, 5, 6, 32, 9, 29];
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

console.log(...findMinMax(array));


console.log('--------------------------------------')
//countdown to blast off!


function countDown(timer) {
  for (let i = 20; i > 0; i--) {
    console.log(i);
    if (i - 1 === 0) {
      console.log("BLAST OFF!");
    }
  }
}

countDown(20);

console.log ('----------------------------')

// find the amount of right vs left in this array

let arrayOf = ['right','left','left','right','right','left','right','left','right','right']


function countRight(arr) {
  let startingAt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'right') {
     startingAt++;
    }
  }
  return startingAt;
}
console.log(`we found ${countRight(arrayOf)} rights`);

// create a countdown from 4,3,2,1 HAPPY NEW YEAR

function countDown(){
  for (let r=4; r>0;r--)
  console.log(r)
  console.log(`HAPPY NEW YEAR`)
}
countDown(4);

