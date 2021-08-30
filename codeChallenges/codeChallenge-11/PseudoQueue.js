'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Implement a Queue using two Stacks.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    PseudoQueue Class part =>
------------------------------------------------------------------------------------------------ */

const Stack = require('./Stack')

class PseudoQueue{
    constructor(){
        this.enqueueConst = new Stack(),
        this.dequeueConst = new Stack()
    }

    enqueue(value){
        let addedValues = this.enqueueConst.push(value)

        // let output = this.enqueueConst.toStringMethod()

        return(addedValues)
    }

    dequeue(){
        if(this.enqueueConst.peek()){
            if(this.enqueueConst.top !== null || this.enqueueConst.top !== undefined){
                let popValue = this.enqueueConst.pop()
                this.dequeueConst.push(popValue)
    
                return(popValue)
            }

            return('Empty')
            
        }
    }
}


module.exports = PseudoQueue