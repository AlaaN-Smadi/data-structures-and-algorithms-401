'use strict';

const Node = require('./Node')

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

        while (current.next !== null) {
            if (current.value === value)
                return true
        }
        return false
    }


    toStringMethod(){
        let current = this.head
        let result = ''

        while(current.next !== null){
            result = result + `{ ${current.value} } -> `
        }
        result = result + 'NULL'

        return result
    }
}

module.exports = Linked_List