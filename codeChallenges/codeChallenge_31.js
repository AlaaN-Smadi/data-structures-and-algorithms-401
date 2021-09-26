'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 31 -  finds the first word to occur more than once in a string

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Functionality part =>
------------------------------------------------------------------------------------------------ */


function repeatedWord(str) {
    
    const strArr = str.split(' '); 
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      let test = strArr[i];
      let checkRepeat = newArr.includes(test);
  
      if (checkRepeat) return test;
      newArr.push(test);
    }
    return "No Repeat ☺";
}


module.exports = repeatedWord