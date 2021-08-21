'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 05 - Linked List

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
Node Class
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. 
------------------------------------------------------------------------------------------------ */



const Node = require('../../codeChallenges/codeChallenge_05/Node')



describe('Testing Node ', () => {
    test('It should check the type of of the Node and its value', () => {

        const testNode = new Node(50)
        const headTest = new Node(10)

        headTest.next = testNode


        expect(typeof headTest.next).toStrictEqual('object');
        expect(headTest.next.value).toStrictEqual(50);
        
        
        
    });

});


