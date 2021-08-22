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



const List = require('../codeChallenges/codeChallenge_05/Linked_List')
const Node =require('../codeChallenges/codeChallenge_05/Node')


test('Code 06', () => {

    let myNode1 = new Node('a')
    let myNode2 = new Node('b')

    let list = new List()
    list.addMethod(myNode1)
    list.addMethod(myNode2)
    list.append('d')

//    a   b  c  d   e 
    expect(list.head).toStrictEqual(myNode1);
    expect(list.insert_Before('d','c')).toStrictEqual('Process Success');
    expect(list.insert_After('d','e')).toStrictEqual('Process Success');
    expect(list.toStringMethod()).toStrictEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> NULL');

    
    
    
});