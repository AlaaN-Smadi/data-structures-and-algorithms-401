'use strict';

const BinaryTree = require('./BinaryTree')
const Node = require('./Node')

class BinarySearchTree extends BinaryTree {

    add(value) {
        let node = new Node(value);

        if (this.root == null) {
            this.root = node;
        } else {
            this.getLocation(this.root, node);
        }
    }
 
    contains(value) {
        let current = this.root
        while (current !== null) {
            if (current.value == value) {
                return true
            } else if (current.value > value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }
}

module.exports = BinarySearchTree