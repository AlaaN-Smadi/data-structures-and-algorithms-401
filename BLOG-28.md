## Code Challenge: Class 28

### Quick Sort

**Pseudocode**

```
 ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
 
```

**step-by-step output after each iteration**

The simplest algorithmic steps for Quicksort is:

1. Pick a pivot element that divides the list into two sublists. We can select a random element as the pivot.

2. Reorder the list so that all elements less than the pivot element are placed before (towards its left) the pivot and all elements greater than the pivot are placed after it (towards its right).

3. Repeat steps 1 and 2 on both the smaller and larger list. That is, Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

### Key features of Quick-sort

- Its in the category of divide and conquer algorithms and in average cases it has a performance of O(n log n), and worst case performance is O(n²)

- It is not a stable sort algorithm, which means that the original order of the elements is not preserved. As an example this would mean that if you placed multiple 5’s in an array, there’s no way to guarantee that the 5’s will all be in the same order that you placed them in the array after it’s been sorted

**-> From the step-by-step output we consider that this function will sort the array 'Quick Sort'**

![Quick Sort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

