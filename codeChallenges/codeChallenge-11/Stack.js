'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Implement a Queue using two Stacks.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Stack Class part =>
------------------------------------------------------------------------------------------------ */


const Node = require('./Node')


class Stack {
    constructor() {
        this.top = null
    }
    //////////////////////////////
    push(val) {

        let node = new Node(val)

        if (this.top == null) {
            this.top = node
            return (`{ ${this.top.value} } -> NULL`)
        }

        //   top           node 
        //   node.next     top
        node.next = this.top
        this.top = node


        let current = this.top
        let result = ''

        while (current !== null) {
            result = result + `{ ${current.value} } -> `
            current = current.next
        }
        result = result + 'NULL'

        return result


    }
    //////////////////////////////

    pop() {
        if (this.top == null || this.top == undefined) {
            return ('Empty')
        }

        let current = this.top
        let previous = current

        if (current.next == null) {
            let popValue = current.value
            this.top = null

            return (popValue)
        }

        while (current.next !== null) {
            previous = current
            current = current.next
        }

        let popValue = current.value
        previous.next = null

        return (popValue)
    }
    //////////////////////////////

    peek() {
        if (this.top == null) {
            return (false)
        }

        return (true)
    }
    //////////////////////////////





}


module.exports = Stack