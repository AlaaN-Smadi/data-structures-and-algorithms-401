'use strict';


/* ------------------------------------------------------------------------------------------------
CHALLENGE 17 - Breadth-first Traversal.

------------------------------------------------------------------------------------------------ */



/* ------------------------------------------------------------------------------------------------
    function  part =>
------------------------------------------------------------------------------------------------ */

let breadthFirst = (tree) => {

    let result = [];

    let recursive = (node) => {
        result.push(node.value);
        if (node.left) recursive(node.left);
        if (node.right) recursive(node.right);
    }

    recursive(tree.root);

    return result;
}


module.exports = breadthFirst 
