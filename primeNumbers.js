//Q 4 Return all prime numbers in an array

//Using anonymous function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

let x=function(numArray){
let prime = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
return prime
}
console.log(x(numArray));



// //Using arrow function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

let x=(numArray)=>{
let prime = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
return prime
}
console.log(x(numArray))


//Using iife function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

let x=((numArray)=>{
let prime = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
console.log(prime)
})(numArray)