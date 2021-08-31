'use strict'


/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Multi-bracket Validation.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    Queue part =>
------------------------------------------------------------------------------------------------ */

const Stack = require('./Stack')

class Queue {
    validate_brackets(val) {

        let test_String = new Stack();

        
        for (let i = 0; i < val.length; i++) {
            let x = val[i];

            if (x == '(' || x == '[' || x == '{') {

                
                test_String.push(x);
                continue;
            }

            
            if (test_String.stackLength() == 0)
                return false;

            let check;
            switch (x) {
                case ')':
                    check = test_String.pop();
                    if (check == '{' || check == '[')
                        return false;
                    break;

                case '}':
                    check = test_String.pop();
                    if (check == '(' || check == '[')
                        return false;
                    break;

                case ']':
                    check = test_String.pop();
                    if (check == '(' || check == '{')
                        return false;
                    break;
            }
        }

        
        return (test_String.stackLength() == 0);
    }
}

module.exports = Queue