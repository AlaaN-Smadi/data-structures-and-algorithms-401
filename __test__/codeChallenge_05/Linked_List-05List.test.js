'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 05 - Linked List

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
Linked List Class
Create a Linked List class
    => Within your Linked List class, include a head property.
        =>Upon instantiation, an empty Linked List should be created.
------------------------------------------------------------------------------------------------ */



const List = require('../../codeChallenges/codeChallenge_05/Linked_List')
const Node =require('../../codeChallenges/codeChallenge_05/Node')

describe('Testing Linked List ', () => {
    test('It should check the Lined List with my values :', () => {

        let myNode1 = new Node('a')
        let myNode2 = new Node('b')
        let myNode3 = new Node('c')

        let list = new List()
        list.addMethod(myNode1)
        list.addMethod(myNode2)
        list.addMethod(myNode3)


        expect(list.head).toStrictEqual(myNode1);
        expect(list.toStringMethod()).toStrictEqual('{ a } -> { b } -> { c } -> NULL');
        expect(list.includesMethod('c')).toStrictEqual(true);
        expect(list.includesMethod('z')).toStrictEqual(false);

        
        
        
    });


    

});

