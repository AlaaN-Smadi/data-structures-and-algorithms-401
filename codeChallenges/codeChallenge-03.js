'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3 - Binary search in a sorted 1D array

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.


NOTE: The search algorithm used in your function should be a binary search.
Check the Resources section for details
------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
First Function 
Solve the problem  ,   by using while loop 
------------------------------------------------------------------------------------------------ */


let BinarySearch = (arr, num) => {
    let upperBorder = arr.length - 1;
    let lowerBorder = 0;

    let resultIndex = -1

    ///   [ 37 ]
    ///   [ 5 , 6 , 10 ]
    ///     0   1    2    => 3
    while (upperBorder >= lowerBorder) {
        //  to find the middle index
        let middleElementIdex = (upperBorder + lowerBorder) / 2;

        /*
            0 => 9
            9+0/2 => 4.5  middle

            0 => 8 //  4 

            4 int      4.5  middle 
            
            middle > int
            middle = int + 1  
        */


        //  to check if the middle result is not integer and correct it
        //  this will happen when the array elements is odd number 
        let integerTest = parseInt(middleElementIdex)
        if (middleElementIdex > integerTest) {
            middleElementIdex = integerTest + 1
        }

        //   to make the condition false and break the while loop
        if (lowerBorder === upperBorder) {
            lowerBorder = upperBorder + 1
            // console.log('*')
        }

        // console.log(middleElementIdex)
        //   to check the middle element is equal to the value of the search key
        if (arr[middleElementIdex] === num) {
            resultIndex = middleElementIdex
            
            lowerBorder = upperBorder + 1
            //  4+0/2 => 2     //  1+0/2 => 0.5 ,  1
            //    [0 , 5 , 10 , 15 , 20 ]
            //         5
        } else if (arr[middleElementIdex] < num) {
            lowerBorder = middleElementIdex + 1
        } else if (arr[middleElementIdex] > num) {
            upperBorder = middleElementIdex - 1
        }



    }
    // console.log('------')
    // console.log(resultIndex)
    // console.log('------')

    return (resultIndex)
}



// BinarySearch([4, 8, 15, 16, 23, 42], 15)
// BinarySearch([-131, -82, 0, 27, 42, 68, 179], 42)
// BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)
// BinarySearch([1, 2, 3, 5, 6, 7], 4)


module.exports = BinarySearch
