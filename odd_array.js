//Q.1>> print odd numbers using anonymous,arrow and iife function


let array =[1,2,3,4,5,6,7,8,9,10]


< anonymous function >
let x=function (array){  
      let array2=array.filter((z)=>{
          return z%2!=0
      })
      return array2
    }
      console.log(x(array))


 < arrow function >  
let x=(array)=>{  
    let array2=array.filter((z)=>{
        return z%2!=0
    })
    return array2
  }
    console.log(x(array))


 < IIFE function >
let x=((x)=>{
   let array2=array.filter((z)=>{
             return z%2!=0
         })
         console.log(array2)
   }
)(array)


