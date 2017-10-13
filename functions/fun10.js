
function spaceToSeparator(input, separator){
   
    if(arguments.length<2 || typeof separator === 'undefined'){
        separator = '_';
    }
    
    var inputWithNewSeparator = '';

    for(i=0;i<input.length;i++){
        if(input[i] === ' '){

            inputWithNewSeparator += separator;
        }else{
            inputWithNewSeparator += input[i];
        }

    }
    return inputWithNewSeparator;

}

console.log(spaceToSeparator('hhh hhh hh '));