'use strict';

const LinkedList = require('./LinkedList')

class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    // hash
    hash(key) {//takes in an arbitrary key and returns an index in the collection.
        const sumCharCode = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    // add
    add(key, value) { //takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
        // get an index
        let hash;
        if (typeof key === "number") {
            hash = key;
        } else {
            hash = this.hash(key);
        }
        // console.log("Key", hash);
        // we need to check if a value already exist in the index
        if (!this.storage[hash]) {
            const ll = new LinkedList();
            ll.insert({ [key]: value });
            this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
        } else {
            this.storage[hash].insert({ [key]: value });
        }
    }

    // get
    get(key) {//takes in the key and returns the value from the table.
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let currentNode = this.storage[hash].head;
            while (currentNode) {
                if (currentNode.value[key]) {
                    return currentNode.value[key];
                }
                currentNode = currentNode.next;
            }
        } else {
            return null;
        }
    }

    // contains
    contains(key) { //takes in the key and returns a boolean, indicating if the key exists in the table already.
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

    // repeatedWord
    repeatedWord(string) {
        const arr = string.split(/[ ,]+/);
        let key;
        let hash;
        for (let i = 0; i < arr.length; i++) {
            key = arr[i].toLowerCase();
            this.add(key, "noValue");
            hash = this.hash(key);
            if (this.storage[hash].head.next) {
                return key;
            }
        }
    }

    // treeIntersection
    treeIntersection(firstTree, secondTree) {
        let key;
        let counter = 0;
        let hash;
        let results = [];
        let traverseTree = (node) => {
            key = node.value;
            this.add(key, "noValue");
            if (counter > 0) {
                typeof key == "number" ? (hash = key) : this.hash(key);
                if (this.storage[hash].head.next) {
                    results.push(hash);
                }
            }
            if (node.left) {
                traverseTree(node.left);
            }
            if (node.right) {
                traverseTree(node.right);
            }
        };
        traverseTree(firstTree.root);
        counter++;
        traverseTree(secondTree.root);

        return results;
    }

    // leftJoin
    leftJoin(leftHash, rightHash) {
        let leftJoinArray = [];
        let matchedData = [];
        for (let i = 0; i < leftHash.storage.length; i++) {
            matchedData = [];
            if (leftHash.storage[i]) {
                const leftKey = Object.keys(leftHash.storage[i].head.value);
                const leftValue = Object.values(leftHash.storage[i].head.value);
                matchedData = matchedData.concat(leftKey);
                matchedData = matchedData.concat(leftValue);
                if (rightHash.storage[i]) {
                    const rightKey = Object.keys(rightHash.storage[i].head.value);
                    const rightValue = Object.values(rightHash.storage[i].head.value);
                    if (rightKey[0] === leftKey[0]) {
                        matchedData = matchedData.concat(rightValue);
                    }
                } else {
                    matchedData.push("NULL");
                }
                leftJoinArray.push(matchedData);
            }
        }
        return leftJoinArray;
    }
}

module.exports = Hashmap