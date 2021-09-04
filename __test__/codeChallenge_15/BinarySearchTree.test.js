'use strict';

const Node = require('../../codeChallenges/codeChallenge_15/Node')
const BinarySearchTree = require('../../codeChallenges/codeChallenge_15/BinarySearchTree');
const BinaryTree = require('../../codeChallenges/codeChallenge_15/BinaryTree');


let myRoot = new Node(50)

let myTree = new BinarySearchTree(myRoot)
myTree.add(40)
myTree.add(30)
myTree.add(60)
myTree.add(70)
myTree.add(35)



describe('Challenge 15', () => {
    test('It should if the brackets are balanced or not :=> ', () => {

        expect(myTree.contains(30)).toStrictEqual(true);
        
        

    });
});
