'use strict';


const Stack = require('../../codeChallenges/codeChallenge_10/Stack')
const Queue = require('../../codeChallenges/codeChallenge_10/Queue')

let stack1 = new Stack()

describe('Challenge 10_Stack', () => {
    test('It should check Stack Methods :', () => {

        expect(stack1.push('a')).toStrictEqual('Successful Added');
        expect(stack1.isEmpty()).toStrictEqual(false);
        expect(stack1.push('b')).toStrictEqual('Added New Node');
        expect(stack1.pop()).toStrictEqual('b');
        expect(stack1.pop()).toStrictEqual('a');
        expect(stack1.pop()).toStrictEqual('Exception, Empty Stack');
        expect(stack1.peek()).toStrictEqual('Exception, Empty Stack');
        expect(stack1.isEmpty()).toStrictEqual(true);


    });
});

let queue = new Queue()

describe('Challenge 10_Queue ', () => {
    test('It should check Stack Methods :', () => {

        expect(queue.enqueue('a')).toStrictEqual('Successful Added');
        expect(queue.isEmpty()).toStrictEqual(false);
        expect(queue.enqueue('b')).toStrictEqual('Added New Node');
        expect(queue.dequeue()).toStrictEqual('a');
        expect(queue.dequeue()).toStrictEqual('b');
        expect(queue.dequeue()).toStrictEqual('Exception, Empty Queue');
        expect(queue.peek()).toStrictEqual('Exception, Empty Queue');
        expect(queue.isEmpty()).toStrictEqual(true);


    });
});