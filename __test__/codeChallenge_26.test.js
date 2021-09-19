'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 26 - Insertion Sort.

------------------------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------------------------
Testing Part
------------------------------------------------------------------------------------------------ */

const insertionSort = require('../codeChallenges/codeChallenge_26')

describe('Testing Code challenge 26', () => {
    test('It should sort the array ', () => {

        expect(insertionSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20]);
        expect(insertionSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12]);

        expect(insertionSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13]);


    });

});