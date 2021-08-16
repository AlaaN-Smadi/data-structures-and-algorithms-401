'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2 - Add element into the middle of an Array 
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
------------------------------------------------------------------------------------------------ */



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



describe('Testing Code challenge 2', () => {
  test('It should return an array with the new value added at the middle index.', () => {

    expect(insertShiftArray([5, 6, 4, 10, 0, 6, 4, 10, 78], 7)).toStrictEqual([5, 6, 4, 10, 0, 7, 6, 4, 10, 78]);
    expect(insertShiftArray([2, 4, 6, -8], 5)).toStrictEqual([2, 4, 5, 6, -8]);
    expect(insertShiftArray([42, 8, 15, 23, 42], 16)).toStrictEqual([42, 8, 15, 16, 23, 42]);
  });

});

