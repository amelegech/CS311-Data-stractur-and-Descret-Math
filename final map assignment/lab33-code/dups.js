"use strict";

/**
 * Function that removes duplicates from an array of numbers
 * 
 * @param {Array} arr array of numbers with duplicate value
 * @returns {Array} arry of numbers with no duplicates
 */
function removeDups(arr){
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    let nodups = [];
    for (const n of set) {
        nodups.push(n);
    }
    return nodups;
}