"use strict";
function humanized(number) {
    if (number % 100 >= 11 && number % 100 <= 13) {

        return number + " th"
    }

        if(number % 10 === 1) {
            return number + " st";
        }
        else if (number % 10 === 2) {
            return number + " nd";
        }
        else if (number % 10 === 3) {
            return number + " rd";
        }
        else {
            return number + "th";
        }
        }

console.log(humanized(4));
