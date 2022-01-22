const arr = [5, 8, 7, 12, 13, 17, 22]

function addUpEvens(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sum = sum + arr[i]
    }
  }
  return sum
}

console.log(addUpEvens(arr))