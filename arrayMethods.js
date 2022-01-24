//declare an Array

const arr = [1,2,3,4,5,6,7,8]

arr.push(20)

console.log(...arr)
//--------------------------------------------------------

let shift = arr.shift()
console.log(`this is what happens when you shift ${shift}`)
//---------------------------------------------------------

arr.unshift(11)
console.log(...arr)
//-----------------------------------------------------------

const myPancake= arr.pop()
console.log(`this is the pop element ${myPancake}`)
//---------------------------------------------------------

const arrays = ["banana","orange","strawberry"]

arrays.push("mango")

console.log(...arrays)