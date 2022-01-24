const arr = [5, 8, 7, 12, 13, 17, 22];

function addUpEvens() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(addUpEvens(arr));

console.log("----------------------------------------");

//how do i add up odd numbers? how do i pull out odd #'s
//add up odd numbers

const array = [1, 2, 3, 4, 5, 6, 7, 8];

function addUpOdds() {
  let sum1 = 0;
  for (let x = 0; x < array.length; x++) {
    if ((array[x] % 2) - 1 === 0) {
      sum1 = sum1 + array[x];
    }
  }
  return sum1;
}
console.log(addUpOdds(array));

console.log("---------------------------------------------");

//addup evens

const numbers = [32, 5, 6, 8, 19, 18.5, 7, 4];

function addEven() {
  let total = 0;
  for (let a = 0; a < array.length; a++) {
    if (numbers[a] % 2 === 0) {
      total = total + numbers[a];
    }
  }
  return total;
}
console.log(addEven(numbers));

console.log("---------------------------------");
//add up odds

const ageGroupOfOddNum = [32, 5, 6, 8, 19, 18.5, 7, 4];

function addOdd() {
  let overAll = 0;
  for (let b = 0; b < array.length; b++) {
    if ((ageGroupOfOddNum[b] % 2) - 1 === 0) {
      overAll = overAll + ageGroupOfOddNum[b];
    }
  }
  return overAll;
}
console.log(addOdd(ageGroupOfOddNum));

console.log("--------------------------------------");

//add up odds and list which items are ODD (COMPLETE )


const addAndDisplay = [31, 6, 8, 9, 13, 18, 7, 4];

function addingOdds() {
  let totals = 0;
  for (let O= 0; O < array.length; O++) {
    if ((addAndDisplay[O] % 2) - 1 === 0) {
      totals = totals + addAndDisplay[O];
    }
  }
  return totals;
}
console.log(addingOdds(addAndDisplay));

//starting here
function countOddtips(inarr) {
  let count = 0;

  for (let t = 0; t < arr.length; t++) {
    if (inarr[t] == addAndDisplay[]) {
      count++;
    }
  }
  return count;
}
console.log(`we found ${countOddtips(addAndDisplay)} amount of odds`);



console.log("------------------------------------------------------");

