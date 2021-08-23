

'use strict';



/* ------------------------------------------------------------------------------------------------
CHALLENGE 07 - Linked List Kth

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
        k-th value from the end of a linked list.
------------------------------------------------------------------------------------------------ */


const Node = require('../codeChallenges/codeChallenge-07/Node')
const Linked_List = require('../codeChallenges/codeChallenge-07/Linked_List')

let myTestList = new Linked_List();



myTestList.addMethod(1)
myTestList.addMethod(2)
myTestList.addMethod(10)
myTestList.addMethod(15)
myTestList.addMethod(5)
myTestList.addMethod(142)

describe('Testing Linked List Kth  Challenge 07 ', () => {
    test('It should check the k-th value from the end of a linked list.:', () => {


        expect(myTestList.kthFromEnd(142)).toStrictEqual('k is greater than the length of the linked list');
        expect(myTestList.kthFromEnd(3)).toStrictEqual('Happy Path');
        expect(myTestList.kthFromEnd(1548)).toStrictEqual('k is greater than the length of the linked list');
        expect(myTestList.kthFromEnd(5)).toStrictEqual('k and the length of the list are the same');
        expect(myTestList.kthFromEnd(-1)).toStrictEqual('k is not a positive integer');
        expect(myTestList.kthFromEnd(0)).toStrictEqual('linked list is of a size 1');


    });


/* ------------------------------------------------------------------------------------------------
        Stretch Goal :  It should return the value in the middle of the listt =>
------------------------------------------------------------------------------------------------ */

    test('Stretch Goal :  It should return the value in the middle of the listt => ', () => {

        expect(myTestList.middle_Node_In_My_List()).toBe(15);

        let myStringList = new Linked_List();

        myStringList.addMethod('a')
        myStringList.addMethod('b')
        myStringList.addMethod('c')
        myStringList.addMethod('d')
        myStringList.addMethod('e')

        expect(myStringList.middle_Node_In_My_List()).toBe('c');


    });
});