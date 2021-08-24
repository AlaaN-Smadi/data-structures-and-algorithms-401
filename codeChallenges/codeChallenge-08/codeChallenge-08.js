'use strict';




/* ------------------------------------------------------------------------------------------------
CHALLENGE 08 - Zip two linked lists.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Function part =>
------------------------------------------------------------------------------------------------ */

const List = require('./list')



function zipLists(firstList, secondList) {
    let firstCurrent = firstList.head
    let secondCurrent = secondList.head

    let resultList = new List()

    while (firstCurrent !== null) {

        resultList.addMethod(firstCurrent.value)

        firstCurrent = firstCurrent.next

        if (secondCurrent !== null) {
            resultList.addMethod(secondCurrent.value)

            secondCurrent = secondCurrent.next
        }
    }

    return resultList
}


module.exports = zipLists