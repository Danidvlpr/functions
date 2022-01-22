const arr = [5, 8, 7, 12, 13, 17, 22]

function addUpEvens() {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sum += arr[i]
    }
  }
return sum
}
console.log(addUpEvens(arr))

console.log('----------------------------------------')


//how do i add up odd numbers? how do i pull out odd #'s
//add up odd numbers

const array = [1,2,3,4,5,6,7,8]

function addUpOdds(){
    let sum1 = 0
    for(let x=0;x < array.length;x++){
    if(array[x] % 2-1===0){
        sum1 = sum1 + array[x]
    }
    }
    return sum1 
}
console.log(addUpOdds(array))