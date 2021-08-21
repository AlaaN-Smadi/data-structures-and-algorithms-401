'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 05 - Linked List

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
Node Class
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. 
------------------------------------------------------------------------------------------------ */


class Node{  //  Value  &  Pointer => next
    constructor(value){
        this.value = value,
        this.next = null
    }
}






module.exports = Node