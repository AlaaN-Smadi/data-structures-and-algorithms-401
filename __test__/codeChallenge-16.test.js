'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 16 - Find the maximum Value in the binary tree

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */


const Node = require('../codeChallenges/codeChallenge_16/Node')
const BinaryTree = require('../codeChallenges/codeChallenge_16/BinaryTree')

let myRoot = new Node(10)
let myTree = new BinaryTree(myRoot)

myTree.add(5)
myTree.add(2)
myTree.add(20)
myTree.add(15)



let myRoot2 = new Node(50)
let myTree2 = new BinaryTree(myRoot2)

myTree2.add(50)
myTree2.add(25)
myTree2.add(70)
myTree2.add(85)

describe('Testing tree maximum Value Challenge 16 ', () => {
    test('It should check the maximum value in the tree :', () => {

        
        expect(myTree.maximumValue()).toStrictEqual(20);
        expect(myTree2.maximumValue()).toStrictEqual(85);


    });
});