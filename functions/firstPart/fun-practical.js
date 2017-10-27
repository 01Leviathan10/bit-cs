//1.zadatak

function checkString(input){
    if (typeof input === 'string'){
        console.log('The type of ' + input + ' is string.');
    }else{
        console.log('The type of ' + input + ' is not a string.');
    }
}
//checkString();

//zadatak 2.

function blankString(input){
    if (typeof input == 'string'){
        if(input === ''){
            console.log('The string is blank.');
        }else {
            console.log('The string is ' + input);
        }

    }
    else{
        console.log('The type of ' + input + ' is not a string.');
    }
}

//blankString(12);

//zadatak 3.

function concatenateThisWord(word, n){

    var concat = '';

    if (arguments.length == 2){
        for (var i=0; i<n; i++){
            concat = concat + word;
        }
     return concat;
    }
    else 
    {
        return word;
    }
}

//console.log(concatenateThisWord('Marina'));

//console.log(concatenateThisWord(someArray));

//zadatak 4.

function humanizeThisNumbers(number){
    if (typeof number === 'number'){
        var toString ='';
        toString +=number;
       var lastDigit = toString.length - 1; 
        if (toString[lastDigit] == '1'){
            return  number + 'st';
            
        }else if (toString[lastDigit] == '2'){
            return  number + 'nd';
            
        }else if(toString[lastDigit] == '3'){
            return number + 'rd';
            
        }else{
            return number + 'th'; 
        }
        }
     else{
        return 'Not a number. Please enter the number.'
    }

}

//console.log(humanizeThisNumbers(12));

