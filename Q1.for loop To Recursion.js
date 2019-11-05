/* eslint-disable require-jsdoc */
/* eslint-disable strict */
/*Write a recursive version of the following function that sum all the elements in an array:
function sum(array) {
let sum = 0;
for (const num of array) {
sum += num;
}
return sum;
}*/

// ANSWER  no recursion 
function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }    
    return  arr.pop() + sum(arr);
}

let result = sum([6,2,3,4]);
console.log(result); //15
