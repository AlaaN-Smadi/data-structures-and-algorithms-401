'use strict';


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


