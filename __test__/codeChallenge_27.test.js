'use strict';

const mainMergeSort = require('../codeChallenges/codeChallenge_27/functionality')

describe('Testing Code challenge 27', () => {
    test('Merge Sort', () => {


        expect(mainMergeSort([31, 12, 13, 7, 1997, 3, 11, 9])).toStrictEqual([3, 7, 9, 11, 12, 13, 31, 1997]);
        //Mergesort([31,12,13,7,1997,3,11,9])
        expect(mainMergeSort([8,4,23,42,16,15])).toStrictEqual([4,8,15,16,23,42]);
        expect(mainMergeSort([20,18,12,8,5,-2])).toStrictEqual([-2,5,8,12,18,20]);
        expect(mainMergeSort([5,12,7,5,5,7])).toStrictEqual([5,5,5,7,7,12]);
        expect(mainMergeSort([2,3,5,7,13,11])).toStrictEqual([2,3,5,7,11,13]);


    
    });

});