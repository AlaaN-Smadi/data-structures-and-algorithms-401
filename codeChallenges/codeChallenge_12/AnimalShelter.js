'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - First-in, First out Animal Shelter.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    AnimalShelter Class part =>
------------------------------------------------------------------------------------------------ */


const Stack = require('./Stack')

class AnimalShelter{
    constructor(){
        this.dog = new Stack(),
        this.cat = new Stack()
    }

    enqueue(animal){
        if(animal.pref === 'cat'){
            let newCat = this.cat.push(animal)
            return newCat
        }else if(animal.pref === 'dog'){
            let newDog = this.dog.push(animal)
            return newDog
        }
    }


    dequeue(pref){
        if(pref === 'cat'){
            let popCat = this.cat.pop()
            return popCat
        }else if(pref === 'dog'){
            let popDog = this.dog.pop()
            return popDog
        }else{
            return null
        }
    }

}


module.exports = AnimalShelter