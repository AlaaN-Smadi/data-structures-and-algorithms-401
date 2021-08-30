'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - First-in, First out Animal Shelter.

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
    push(animal) {

        let node = animal

        if (this.top == null) {
            this.top = node
            return (`{ ${this.top.name} } -> NULL`)
        }

        //   top           node 
        //   node.next     top
        node.next = this.top
        this.top = node


        let current = this.top
        let result = ''

        while (current !== null) {
            result = result + `{ ${current.name} } -> `
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
            let popName = current.name
            this.top = null

            return (popName)
        }

        while (current.next !== null) {
            previous = current
            current = current.next
        }

        let popName = current.name
        previous.next = null

        return (popName)
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