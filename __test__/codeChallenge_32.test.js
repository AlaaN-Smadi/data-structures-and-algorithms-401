"use strict";
const Hashmap = require("../codeChallenges/codeChallenge_32/HashMap");
const BinaryTree = require("../codeChallenges/codeChallenge_32/Tree");
const Node = require("../codeChallenges/codeChallenge_32/Node");

describe("Tree InterSection challenge 32", () => {
    let firstTree;
    let secondTree;
    beforeAll(() => {
        //first tree
        let one = new Node(150);
        let two = new Node(100);
        let three = new Node(250);
        let four = new Node(75);
        let five = new Node(160);
        let six = new Node(125);
        let seven = new Node(175);
        let eight = new Node(200);
        let nine = new Node(350);
        let ten = new Node(300);
        let eleven = new Node(500);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        five.left = six;
        five.right = seven;
        three.right = eight;
        three.left = nine;
        nine.left = ten;
        nine.right = eleven;

        //second tree
        let one2 = new Node(42);
        let two2 = new Node(100);
        let three2 = new Node(600);
        let four2 = new Node(15);
        let five2 = new Node(160);
        let six2 = new Node(125);
        let seven2 = new Node(175);
        let eight2 = new Node(200);
        let nine2 = new Node(350);
        let ten2 = new Node(4);
        let eleven2 = new Node(500);

        one2.left = two2;
        one2.right = three2;
        two2.left = four2;
        two2.right = five2;
        five2.left = six2;
        five2.right = seven2;
        three2.right = eight2;
        three2.left = nine2;
        nine2.left = ten2;
        nine2.right = eleven2;

        firstTree = new BinaryTree(one);
        secondTree = new BinaryTree(one2);
    });

    it("It Should return the intersection nodes", () => {
        let hashTable = new Hashmap(5000);
        let expectedResults = [100, 160, 125, 175, 350, 500, 200];

        expect(hashTable.treeIntersection(firstTree, secondTree)).toEqual(
            expectedResults
        );
    });


    it("It Should check the next of uncommon elements", () => {
        let hashTable = new Hashmap(5000);
        let expectedResults = [100, 160, 125, 175, 350, 500, 200];
        expect(hashTable.treeIntersection(firstTree, secondTree)).toEqual(
            expectedResults
        );
        expect(hashTable.storage[42].head.next).toBeNull();
        expect(hashTable.storage[100].head.next).toBeTruthy();
    });
});