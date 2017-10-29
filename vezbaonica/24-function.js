"use strict"
function blankOrNot() {
var word = " fnidfnsdjn";
    if (typeof word === "string" && word === "") {
        console.log("Hello my friend!")
    }
    else {
        console.log("Input must be string with words!")
    }
}

blankOrNot();