const LinkedList = require("./LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  // hash
  hash(key) {
     // hashing algorithm
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  // add
  add(key, value) {
    // get an index
    let hash;
    if (typeof key == "number") {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.insert({ [key]: value });
      this.storage[hash] = ll; 
    } else {
      this.storage[hash].insert({ [key]: value });
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

   // repeatedWord method !!
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
}

module.exports = Hashmap;