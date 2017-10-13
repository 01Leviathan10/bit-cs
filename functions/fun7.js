//zadatak 7.

function lastPositionInWord(word, lastLetter) {

    if (typeof word === 'string') {
        for (var i = word.length; i >= 0; i--) {
            if (lastLetter == word[i - 1]) {
                return i;
            } 
        }
        return -1;
    } else {
        return 'Not a string.'
    }

}

console.log(lastPositionInWord('Neaaaiaaa', 'i'));


