'use strict';




/* ------------------------------------------------------------------------------------------------
CHALLENGE 07 - Linked List Kth

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Linked  List  Class =>    k-th value from the end of a linked list.
------------------------------------------------------------------------------------------------ */


const Node = require('./Node')

class Linked_List {
    constructor() {
        this.head = null,
            this.tail = null,
            this.numberOfNodes = 0
    }


/* ------------------------------------------------------------------------------------------------
    Inseret Method =>  To add new Node to my List 
------------------------------------------------------------------------------------------------ */

    addMethod(value) {
        let node = new Node(value)



        if (this.head == null) {
            this.head = node
            return
        }

        let current = this.head

        while (current.next !== null) {
            current = current.next
        }

        current.next = node
        node.previous = current
        this.tail = node
        this.numberOfNodes++
    }

/* ------------------------------------------------------------------------------------------------
    kthFromEnd Method =>  To check the Node in k-th index from last Node in my List 
------------------------------------------------------------------------------------------------ */

    kthFromEnd(k) {

        if (k > this.numberOfNodes) {
            return ('k is greater than the length of the linked list')
        } else if (k < 0) {
            return ('k is not a positive integer')
        }

        let current = this.tail
        

        for(let i =0;i<k;i++){
            current = current.previous
        }


        if (current === this.head) {
            return ('k and the length of the list are the same')
        } else if (current === this.tail) {
            return ('linked list is of a size 1')
        } else {
            return 'Happy Path';

        }

    }

/* ------------------------------------------------------------------------------------------------
    middle_Node_In_My_List  Method =>  To check the Middle Node in my List 
------------------------------------------------------------------------------------------------ */

    middle_Node_In_My_List() {
        let middleNodeIndex = this.numberOfNodes / 2
        let integer_Index = parseInt(middleNodeIndex)

        if (integer_Index !== middleNodeIndex) {
            middleNodeIndex = integer_Index + 1
        }

        let current = this.head
        for (let i = 0; i < middleNodeIndex; i++) {
            current = current.next
        }

        return current.value;
    }

}


module.exports = Linked_List