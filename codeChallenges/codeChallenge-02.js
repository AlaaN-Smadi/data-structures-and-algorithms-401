'use strict';


/* ------------------------------------------------------------------------------------------------
First Function 
Solve the problem  ,   by using for loop 
------------------------------------------------------------------------------------------------ */
//  4 / 2  =>  2
//  5 /2 =>  2.5 ~ 3 

let insertShiftArray = (arr, ele) => {
    let newArr = arr
  
    let middle = newArr.length / 2  //   5.5 ~ 6
    let intvar = parseInt(middle)
    if (intvar < middle) {
      middle = parseInt(middle) + 1
    }
    // console.log(middle)
  
    let result = []
  
    for (let i = 0; i < arr.length + 1; i++) {
      if (i < middle) {
        result.push(arr[i])
      } else if (i == middle) {
        result.push(ele)
      } else if (i > middle) {
        result.push(arr[i - 1])
      }
    }
  
    // console.log(result)
    return result
  }