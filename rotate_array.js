//Q.8>> Rotate array by k times // right to left shift

/*
    let arr1 = [1,2,3,4,5]
    let arr2 = [1,2,3,4,5]
    let k=2
   
 
    <anonymous function>  
    let rotatearray = function(array, k) {
    for (let i = 0; i < k; i++) {
           array.unshift(array.pop());
       }
        return array;
    }
    console.log(rotatearray(array,k))


    <arrow function>
    let rotatearray = (array, k)=>{
        for (let i = 0; i < k; i++) {
               array.unshift(array.pop());
           }
            return array;
        }
        console.log(rotatearray(array,k))


    <iife function>
    let rotatearray = ((array, k)=>{
        for (let i = 0; i < k; i++) {
               array.unshift(array.pop());
           }
            console.log(array)
        })(array,k)

*/