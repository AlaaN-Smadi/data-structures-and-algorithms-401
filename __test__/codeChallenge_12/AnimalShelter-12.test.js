'use strict';



/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - First-in, First out Animal Shelter.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */

const AnimalShelter = require('../../codeChallenges/codeChallenge_12/AnimalShelter')
const Node = require('../../codeChallenges/codeChallenge_12/Node')


let animalShelter = new AnimalShelter()

let cat1 = new Node('cat', 'lolo')
let cat2 = new Node('cat', 'um zeki')
let cat3 = new Node('cat', 'flufy')


let dog1 = new Node('dog', 'abo ras')
let dog2 = new Node('dog', 'salag')
let dog3 = new Node('dog', 'wafy')


describe('Challenge 12_AnimalShelter ', () => {
    test('It should check enqueue Method for Cat :', () => {

        expect(animalShelter.enqueue(cat1)).toStrictEqual('{ lolo } -> NULL');
        expect(animalShelter.enqueue(cat2)).toStrictEqual('{ um zeki } -> { lolo } -> NULL');
        expect(animalShelter.enqueue(cat3)).toStrictEqual('{ flufy } -> { um zeki } -> { lolo } -> NULL');

    });

    test('It should check enqueue Method for Dog :', () => {

        expect(animalShelter.enqueue(dog1)).toStrictEqual('{ abo ras } -> NULL');
        expect(animalShelter.enqueue(dog2)).toStrictEqual('{ salag } -> { abo ras } -> NULL');
        expect(animalShelter.enqueue(dog3)).toStrictEqual('{ wafy } -> { salag } -> { abo ras } -> NULL');

    });


    test('It should check dequeue Method for AnimalShelter :', () => {

        expect(animalShelter.dequeue('cat')).toStrictEqual('lolo');
        expect(animalShelter.dequeue('cat')).toStrictEqual('um zeki');
        expect(animalShelter.dequeue('cat')).toStrictEqual('flufy');

        expect(animalShelter.dequeue('dog')).toStrictEqual('abo ras');
        expect(animalShelter.dequeue('dog')).toStrictEqual('salag');
        expect(animalShelter.dequeue('dog')).toStrictEqual('wafy');

        expect(animalShelter.dequeue('rabbit')).toStrictEqual(null);


    });


   
});