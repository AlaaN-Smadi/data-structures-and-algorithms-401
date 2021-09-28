'use strict';

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getList() {
        if (!this.head) return 'no list';
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}


module.exports = LinkedList