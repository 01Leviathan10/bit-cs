


//zadatak 6.

function firstPositionInWord(word, firstLetter) {

    if (typeof word === 'string') {
        var position = word.length - 1;
        for (var i = 0; i < word.length; i++) {
            if (firstLetter == word[i]){
                return position;     
            }
            else {
                return -1;
            }

        }


    } else {
        return 'Not a string.'
    }

}

console.log(firstPositionInWord('Marko', 'c'));


