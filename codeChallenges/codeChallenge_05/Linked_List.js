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
            if (current.value === value) {
                return true
            }
            current = current.next

        }
        return false
    }


    toStringMethod() {
        let current = this.head
        let result = ''

        while (current !== null) {
            result = result + `{ ${current.value} } -> `
            current = current.next
        }
        result = result + 'NULL'

        return result
    }


/* ------------------------------------------------------------------------------------------------
CHALLENGE 06 - Linked List Insertions

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Linked List Class
    Create a Linked List class
        => Within your Linked List class, include a head property.
            =>Upon instantiation, an empty Linked List should be created.
------------------------------------------------------------------------------------------------ */

    append(value) {

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
    }


    insert_Before(value, newValue) {

        let node = new Node(newValue)

        let current = this.head

        if(current.value === value){
            node.next = current
            this.head = node

            return ("Process Success")
        }

        while (current !== null) {

            if (current.next.value === value) {

                node.next = current.next
                current.next = node
                return ("Process Success")
            }
            current = current.next
        }

        return ('No change, method exception')
    }


    insert_After(value, newValue){
        let node = new Node(newValue)

        let current = this.head

        while (current !== null) {

            if (current.value === value) {

                node.next = current.next
                current.next = node
                return ("Process Success")
            }
            current = current.next
        }

        return ('No change, method exception')

    }

}

module.exports = Linked_List