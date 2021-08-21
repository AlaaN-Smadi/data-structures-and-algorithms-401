'use strict';

const List = require('../../codeChallenges/codeChallenge_05/Linked_List')
const Node =require('../../codeChallenges/codeChallenge_05/Node')

describe('Testing Linked List ', () => {
    test('It should check the type of of the Node and its value', () => {

        let myNode1 = new Node('a')
        let myNode2 = new Node('b')
        let myNode3 = new Node('c')

        let list = new List()
        list.addMethod(myNode1)
        list.addMethod(myNode2)
        list.addMethod(myNode3)


        expect(list.head).toStrictEqual(myNode1);
        expect(list.toStringMethod()).toBe('');
        // expect(list.includesMethod('c')).toStrictEqual(false);
        
        
        
    });

});

