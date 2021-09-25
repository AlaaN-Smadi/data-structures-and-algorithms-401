'use strict';

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

module.exports = LinkedList