/* eslint-disable require-jsdoc */

"use strict";
//#3. What does the call stack look like (very similar to what I showed on the slides) when execution
//reaches the “what does the stack look like here?” comment.

function a(x, y) {
let n = x - y;
let m = x + y;
return b(n,m);
}

function b(x, y) {
let something = x / 2;
let other = y + 3;
let stuff = c(something + other);
return (stuff + something) / other;
}

function c(n) {
let m = n * 3;
debugger;
// what does the stack look like here?
return m - 1;
}
console.log(a(3,4));//2.7 
/////////////////////////////***ANswer for Question 3***//////////////////////////////////

/*
//STACK c 
     {m=28.5-1= 27.5} //return 27.5   

//STACK b
     someting=-1/2= -0.5
     Other =10
     stuff = undefined;// return 2.7//  (27.5-0.5)/10 (stuff +somthing)/other

//STACK a
      n= -1 (x-y)
      m= 7 (x+y) //return (-1,7)

/////////////////////////////////////////////////////////////////////////////////////////////*/


//#2. What does the call stack look like when execution first reaches the if statement (see next page, where I
//also added the comment ‘break here’).

function min(array) {
if (array.length > 1) {
let other = min(array.splice(1));
if   (other < array[0]) { // break here
return other;
}
}
return array[0];
}
console.log(min([3,5,2]));
////////////////////////*answer for minimum Stack*///////////////////////////////
/*Third STACK  
          Other= min [2];

Second STACK  
           Other= min [5,2];

first STACK  
          other= min [3,5,2];*/
