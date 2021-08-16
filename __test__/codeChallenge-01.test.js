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



describe('Testing challenge 1', () => {
    it('It should return an array with elements in reversed order.', () => {
      const number1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]		;
  
      expect(reverseArray(number1)).toStrictEqual([199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]);
      expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
      expect(reverseArray([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
    });

  });


  describe('Testing challenge 2', () => {
    it('It should return an array with elements in reversed order.', () => {
      const number1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]		;
  
      expect(reverseArrayMap(number1)).toStrictEqual([199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]);
      expect(reverseArrayMap([89, 2354, 3546, 23, 10, -923, 823, -12])).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
      expect(reverseArrayMap([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
    });
  });


  