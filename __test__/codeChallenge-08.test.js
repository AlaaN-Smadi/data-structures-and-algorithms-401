'use strict';



/* ------------------------------------------------------------------------------------------------
CHALLENGE 08 - Zip two linked lists.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */

const zipLists = require('../codeChallenges/codeChallenge-08/codeChallenge-08')
const Node = require('../codeChallenges/codeChallenge-08/Node')
const List = require('../codeChallenges/codeChallenge-08/list')


let list1 = new List()
let list2 = new List()


list1.addMethod(1)
list1.addMethod(3)
list1.addMethod(5)
list1.addMethod(7)

//  list1  => {1} -> {3} -> {5} -> {7}

list2.addMethod(2)
list2.addMethod(4)
list2.addMethod(6)
list2.addMethod(8)

//  list2  => {2} -> {4} -> {6} -> {8}

//  { 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 }

describe('Testing Linked List Kth  Challenge 07 ', () => {
    test('It should check the k-th value from the end of a linked list.:', () => {

        let resultList = zipLists(list1,list2)
        console.log(typeof resultList)
        expect(resultList.toStringMethod()).toStrictEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> NULL');


    });
});