
'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 08 - Zip two linked lists.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    List Class =>
------------------------------------------------------------------------------------------------ */

const Node = require('./Node')
class Linked_List {
    constructor() {
        this.head = null
    }

    addMethod(val) {
        let node = new Node(val)
        
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
}


module.exports = Linked_List