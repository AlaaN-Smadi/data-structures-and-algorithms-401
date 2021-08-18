'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4 - InterView  Question

write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.

------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
First Function 
Solve the problem  ,   by using for loop  &&  map
------------------------------------------------------------------------------------------------ */

//  [ [ 1,2 ] , [ 1 , 2 ] ]   input
//  [     3   ,     3     ]   output
let addRow = (arr)=>{
    let resultArr = arr.map(item=>{
        let sum = 0

        for(let i=0;i<item.length;i++){
            sum = sum + item[i]
        }

        return(sum)

    })

    // console.log(resultArr)
    return(resultArr)
}




module.exports = addRow
