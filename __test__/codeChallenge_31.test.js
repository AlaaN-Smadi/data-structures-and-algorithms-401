
'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 31 -  finds the first word to occur more than once in a string

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Testing part =>
------------------------------------------------------------------------------------------------ */


const repeatedWord = require("../codeChallenges/codeChallenge_31");

const testTextOne = "Test My Function 😶";
const testTextTwo = "My function is work correctly , is repeat will be called 😅";
const testTextThree = "test Emoji 😉 😊 😉";

describe("Repeated Word Test", () => {
  
  it("finds the no repeated words", () => {
    expect(repeatedWord(testTextOne)).toBe("No Repeat ☺");
  });
  it("finds the first word to occur more than once in a string", () => {
    expect(repeatedWord(testTextTwo)).toBe("is");
  });
  it("finds the first word to occur more than once in a string", () => {
    expect(repeatedWord(testTextThree)).toBe("😉");
  });
});
