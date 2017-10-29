"use strict";
function numbLetter(str,letter) {
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        toString (str[i]);
        if (str[i] === letter) {
        var theCount = letter;
            for (var j = 0; j < theCount.length; j++) {
                num = j;
                console.log(theCount); //kako brojac napraviti
            }
        }

    }   
}

console.log(numbLetter("ludak ludi","u"));