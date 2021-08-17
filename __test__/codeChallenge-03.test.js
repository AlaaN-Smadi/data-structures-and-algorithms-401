'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3 - Binary search in a sorted 1D array

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.


NOTE: The search algorithm used in your function should be a binary search.
Check the Resources section for details
------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
First Function 
Solve the problem  ,   by using while loop 
------------------------------------------------------------------------------------------------ */

const BinarySearch = require('../codeChallenges/codeChallenge-03')

describe('Testing Code challenge 03', () => {
    test('It should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.', () => {


        expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
        expect(BinarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toStrictEqual(4);
        expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
        expect(BinarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);

    });

});

