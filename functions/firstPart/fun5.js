
function numberOfLetters(sentence, n){
    var count = 0;
    for(var i = 0; i< sentence.length; i++){
        if(n == sentence[i]){
            count += 1;
        }

    }        
    return count;   
}

console.log(numberOfLetters('Marina','n'));