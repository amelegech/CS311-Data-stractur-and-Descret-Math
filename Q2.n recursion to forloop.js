/* eslint-disable require-jsdoc */
/* eslint-disable strict */
//Write a non-recursive version of the following function which returns the min element in an array:
/*function min(array) {
if (array.length > 1) {
let other = min(array.splice(1));
if (other < array[0]) {
return other;
}
}
return array[0];
}*/
//ANSWER non-recursive
 function min(array){
     let minimum=array[0];
     for(let i= 0;i<array.length;i++){
         if(array[i]<minimum){
             minimum = array[i];
         }
     }
 return minimum;
         
 }
 let myarray =[8,2,-12,2,4];
 let result= min(myarray);
 console.log(result);