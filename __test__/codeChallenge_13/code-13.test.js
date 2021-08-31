'use strict'


/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - First-in, First out Animal Shelter.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */

const Queue = require('../../codeChallenges/codeChallenge_13/Queue')

let testQueue = new Queue()

describe('Challenge 13', () => {
    test('It should if the brackets are balanced or not :=> ', () => {

        expect(testQueue.validate_brackets('([)(])')).toStrictEqual(false);
        expect(testQueue.validate_brackets('{}(){}')).toStrictEqual(true);
        expect(testQueue.validate_brackets('()[[Extra Characters]]')).toStrictEqual(true);
        expect(testQueue.validate_brackets('(){}[[]]')).toStrictEqual(true);
        expect(testQueue.validate_brackets('(](')).toStrictEqual(false);
        expect(testQueue.validate_brackets('{(})')).toStrictEqual(false);
        expect(testQueue.validate_brackets('[}')).toStrictEqual(false);
        

    });
});
