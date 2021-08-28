'use strict';

const Node = require('./Node')


class Stack {
    constructor() {
        this.top = null
    }
    //////////////////////////////
    push(val) {

        let node = new Node(val)

        if(this.top == null){
            this.top = node
            return('Successful Added')
        }

        //   top           node 
        //   node.next     top
        node.next = this.top
        this.top = node

        return('Added New Node')

    }
    //////////////////////////////

    pop() {
        if(this.top == null){
            return('Exception, Empty Stack')
        }

        let node = this.top

        this.top = node.next

        return(node.value)
    }
    //////////////////////////////

    peek() {
        if(this.top == null){
            return('Exception, Empty Stack')
        }

        return(this.top.value)
    }
    //////////////////////////////

    isEmpty() {
        if(this.top == null){
            return(true)
        }

        return(false)
    }

}


module.exports = Stack