'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4 - InterView  Question

write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.

------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
First Function 
Solve the problem  ,   by using for loop  &&  map
------------------------------------------------------------------------------------------------ */


const addRow = require('../codeChallenges/InterView-04')

describe('Testing Code challenge 04', () => {
    test('It should return an array with the appropriate values.', () => {


        expect(addRow([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual([ 6, 15, 18 ]);
        expect(addRow([[0,1,5],[-4,7,2],[-3,12,11]])).toStrictEqual([ 6, 5, 20 ]);
        
        
        
    });

});

