//Q.6>> Return median of array


<anonymous function>
   var nums1=[1,2]
   var nums2=[3,4]
let findMedianSortedArrays = function(nums1, nums2) {
   const array = nums1.concat(nums2);
   array.sort(function(a, b) {
     return a - b;
   });
   var mid = array.length / 2;
   return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
};
console.log(findMedianSortedArrays(nums1,nums2))


<arrow function>
let findMedianSortedArrays = (nums1, nums2)=>{
    const array = nums1.concat(nums2);
    array.sort(function(a, b) {
      return a - b;
    });
    var mid = array.length / 2;
    return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
 };
 console.log(findMedianSortedArrays(nums1,nums2))


<iife function> 
let findMedianSortedArrays = ((nums1, nums2)=>{
    const array = nums1.concat(nums2);
    array.sort(function(a, b) {
      return a - b;
    });
    var mid = array.length / 2;
    var medianResult = mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
    console.log(medianResult)
})(nums1,nums2);
