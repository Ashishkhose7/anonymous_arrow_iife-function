//Q.7>> Remove dublicates from array

/*
  let array =[1,2,3,2,1,3]

  <anonymous function>
       let removeDuplicates = function (array) {
        return array.filter((item,index) => array.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(array));



  <arrow function>
    let removeDuplicates =(array)=>{
        return array.filter((item,index) => array.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(array));
 
    

<iife function>
    let removeDuplicates=((array)=>{
        let filteredArray = array.filter((item,index) => array.indexOf(item) === index);
      console.log(filteredArray)
    })(array)
*/