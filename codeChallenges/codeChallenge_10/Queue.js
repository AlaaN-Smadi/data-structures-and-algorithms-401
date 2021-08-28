'use strict';

const Node = require('./Node')

class Queue {
    constructor() {
        this.front = null,
        this.back = null
    }
    //////////////////////////////
    enqueue(val) {
        let node = new Node(val)

        if(this.front == null){
            this.front = node
            this.back = node
            return('Successful Added')
        }
        //   back    node
        //   queue.next=>  back
        this.back.next = node
        this.back = node

        return('Added New Node')
    }
    //////////////////////////////
    dequeue() {
        if(this.front == null){
            return('Exception, Empty Queue')
        }
        let node = this.front

        this.front = node.next

        return(node.value)
    }
    //////////////////////////////
    peek() {
        if (this.front == null) {
            return ('Exception, Empty Queue')
        }

        return (this.top.value)
    }
    //////////////////////////////

    isEmpty() {
        if (this.front == null) {
            return (true)
        }

        return (false)
    }
}



module.exports = Queue
