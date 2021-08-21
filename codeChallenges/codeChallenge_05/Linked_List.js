'use strict';

const Node = require('./Node')


/* ------------------------------------------------------------------------------------------------
CHALLENGE 05 - Linked List

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
Linked List Class
Create a Linked List class
    => Within your Linked List class, include a head property.
        =>Upon instantiation, an empty Linked List should be created.
------------------------------------------------------------------------------------------------ */


class Linked_List {
    constructor() {
        this.head = null
    }

    addMethod(node) {
        if (this.head == null) {
            this.head = node
            return
        }

        let current = this.head

        while (current.next !== null) {
            current = current.next
        }

        current.next = node
    }


    includesMethod(value) {
        let current = this.head

        while (current !== null) {
            if (current.value === value){
                return true
            }
            current = current.next
               
        }
        return false
    }


    toStringMethod(){
        let current = this.head
        let result = ''

        while(current !== null){
            result = result + `{ ${current.value} } -> `
            current = current.next
        }
        result = result + 'NULL'

        return result
    }
}

module.exports = Linked_List