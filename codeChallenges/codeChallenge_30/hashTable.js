"use strict";


const LinkedList = require('./LinkedList')


class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }



    hash(key) {
        // hashing algorithm
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // return the value of the hashed key
    }

    //This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    add(key, value) {
        const hash = this.hash(key);
        //we need to store this key in our map (array)
        // we need to check if a value already exist in the index
        //if there is nothing in this location //create new linked list and  add to it 
        if (!this.storage[hash]) {

            const ll = new LinkedList();
            //store key and value /  //-> {name: mahmoud}
            ll.append({ [key]: value });
            this.storage[hash] = ll;

        } else {
            this.storage[hash].append({ [key]: value });
        }
    }
    //Returns: Value associated with that key in the table
    get(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;

            while (currentNode) {
                if (currentNode.value[key]) {
                    return currentNode.value[key];
                    ;
                }
                currentNode = currentNode.next;
            }
        } else {
            return null;
        }
    }


    //Returns: Boolean, indicating if the key exists in the table already or not .

    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        } else {
            return false;
        }
    }
}



module.exports = Hashmap;