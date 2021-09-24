'use strict';

const Stack = require('./Stack');

let myResultsStack = new Stack()

function Mergesort(arr) {

    let n = arr.length
    let left
    let right
    if (n > 1) {
        let mid = n / 2
        left = arr.slice(0, mid)
        right = arr.slice(mid)
        // sort the left side
        Mergesort(left)
        // sort the right side
        Mergesort(right)
        // merge the sorted left and right sides together

    }
    if (left && right) {

        Merge(left, right, arr)
        myResultsStack.push(arr)
        // console.log(arr)

    }




}
///////////////////////////////////////////
function Merge(left, right, arr) {
    // console.log(arr)
    let i = 0
    let j = 0
    let k = 0

    while ((i < left.length) && (j < right.length)) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        }
        else {
            arr[k] = right[j]
            j = j + 1
        }

        k = k + 1
    }


    if (i == left.length) {
        while (j < right.length) {
            arr[k] = right[j]
            k++
            j++
        }
        // console.log('----------------')
    }
    else {
        while (i < left.length) {
            arr[k] = left[i]
            k++
            i++
        }
    }

}


function mainMergeSort(arr){
    Mergesort(arr)
    return(myResultsStack.pop())
}

module.exports = mainMergeSort