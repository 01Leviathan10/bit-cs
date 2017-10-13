//zadatak 14.

function calcAge(yob) {
    return 2017- yob;
}

function retirement(gender, year){
    if(arguments.length<2){
        return 'Not enough arguments.';
    }

    var age = calcAge(year);
    var retirementMan = 65 - age;
    var retirementWoman = 60 - age;
    gender = gender[0].toLowerCase();

    
    if(gender === 'm'){
        if(age>65){
            return 'You are allready retired.';
        }else{
            return retirementMan;
        }

    }else if(gender === 'f'){
        if(age>60){
            return 'You are allready retired.';
        }else{
            return retirementWoman;
        }
    }
    else{
        return 'You are error.';
    }


}
console.log(retirement('Male',1989));