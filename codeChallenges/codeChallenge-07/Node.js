'use strict';




/* ------------------------------------------------------------------------------------------------
CHALLENGE 07 - Linked List Kth

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Node  Class =>    k-th value from the end of a linked list.
------------------------------------------------------------------------------------------------ */



class Node{  //  Value  &  Pointer => next  &  Pointer => previous
    constructor(value){
        this.value = value,
        this.next = null,
        this.previous = null
    }
}






module.exports = Node