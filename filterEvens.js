//functions with loops you plug in the const unlike functions to convert

const arr = [4,8,1, 12, 14, 18, 22]

function filterJustEvens(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) { // check if element is even
      newArr.push(arr[i]) // put it in new array
    
    }
  }

  return newArr
}

console.log(filterJustEvens(arr))