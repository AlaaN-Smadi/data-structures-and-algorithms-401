'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Reverse Array
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
First Function 
Reverse an array  ,   by using for loop 
------------------------------------------------------------------------------------------------ */

let reverseArray = (arr) =>{
    let resultArr = []
    for(let i=arr.length-1;i>=0;i--){
        resultArr.push(arr[i])
    }

    // console.log(resultArr)
    return resultArr
}


/* ------------------------------------------------------------------------------------------------
Second Function 
Reverse an array  ,   by using map 
------------------------------------------------------------------------------------------------ */

let reverseArrayMap = (arr) =>{
    
    let resultArr = []
    let numberOfItems = arr.length

    resultArr = arr.map((item,index)=>{
        let i = (numberOfItems - index)-1

        return(arr[i])
    })

    // console.log(resultArr)
    return resultArr
}
