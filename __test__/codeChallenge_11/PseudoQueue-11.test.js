
'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Implement a Queue using two Stacks.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */

const PseudoQueue = require('../../codeChallenges/codeChallenge-11/PseudoQueue')

let queue = new PseudoQueue()

describe('Challenge 11_PseudoQueue ', () => {
    test('It should check enqueue Method :', () => {

        expect(queue.enqueue('a')).toStrictEqual('{ a } -> NULL');
        expect(queue.enqueue('b')).toStrictEqual('{ b } -> { a } -> NULL');
        expect(queue.enqueue('c')).toStrictEqual('{ c } -> { b } -> { a } -> NULL');

    });


    test('It should check dequeue Method :', () => {

        expect(queue.dequeue()).toStrictEqual('a');
        expect(queue.dequeue()).toStrictEqual('b');
        expect(queue.dequeue()).toStrictEqual('c');

    });


   
});