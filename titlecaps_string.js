


< anonymous function >
  let x=function(array){
           let abc = array.filter(function(array){
            let reversed = array.split('').reverse().join('')
            if(array===reversed){
                return array
            }}
     )
     return abc
  }
    console.log(x(array))


< arrow function >
let x=(array)=>{
    let abc = array.filter(function(array){
     let reversed = array.split('').reverse().join('')
     if(array===reversed){
         return array
     }}
)
return abc
}
console.log(x(array))


< iife function >
let x=((array)=>{
    let abc = array.filter(function(array){
     let reversed = array.split('').reverse().join('')
     if(array===reversed){
         return array
     }}
)
console.log(abc)
})(array)
