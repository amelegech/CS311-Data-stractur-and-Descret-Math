"use strict";

function checkForSum(numList, num){
    let m = new Map();

    for (let i = 0; i < numList.length; i++) {
        m.set(numList[i], num - numList[i]);   
    }

    for (const [key, value] of m) {
        if (m.has(value)) {
            return true;
        }
    }

    return false;
}

let result = checkForSum([3, 5, 8, 4], 9);

console.log(result);