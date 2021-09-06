'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 17 - Breadth-first Traversal.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    testing  part =>
------------------------------------------------------------------------------------------------ */


const Tree = require('../codeChallenges/codeChallenge_17/Tree')
const breadthFirst = require('../codeChallenges/codeChallenge_17/functionPart')
const Node = require('../codeChallenges/codeChallenge_17/Node')

let myRoot = new Node(2)
let myTree = new Tree(myRoot)

myTree.add(2)
myTree.add(5)
myTree.add(6)
myTree.add(7)
myTree.add(9)
 



let myRoot2 = new Node('a')
let myTree2 = new Tree(myRoot2)

myTree2.add('b')
myTree2.add('r')
myTree2.add('z')
myTree2.add('y')
myTree2.add('g')

describe('Testing Code challenge 17', () => {
    test(' It should take a tree and return a list of all values in the tree, in the order they were encountered ', () => {


        expect(breadthFirst(myTree)).toStrictEqual([2, 2, 5, 6, 7, 9]);
        expect(breadthFirst(myTree2)).toStrictEqual(["a", "b", "r", "g", "z", "y"]);
        

    });

});
