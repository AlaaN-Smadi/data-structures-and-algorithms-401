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
    test('It should check tree functions are working fine or not :=> ', () => {
        
        expect(myTree.contains(30)).toStrictEqual(true);
        expect(myTree.contains(121)).toStrictEqual(false);
        expect(myTree.inOrder()).toStrictEqual([30, 35, 40, 50, 60, 70]);
        expect(myTree.postOrder()).toStrictEqual([35, 30, 40, 70, 60, 50]);
        expect(myTree.preOrder()).toStrictEqual([50, 40, 30, 35, 60, 70]);
        
        

    });
});
