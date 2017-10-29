"use strict"
var average = 0;
var David = 80;
var Marko = 77;
var Dany = 88;
var John = 60;
var Thomas = 68;
var names = [David,Marko,Dany,John,Thomas];
for (var i = 0; i < names.length; i++) {
    average = ((David + Marko + Dany + John + Thomas) / 5) ;
}
if (average >= 90) {
    console.log("A");
}
else if (average >= 80 && average <= 90 ){
    console.log("B");
}
else if (average >= 70 && average <= 80 ){
    console.log("C");
}
else if (average >= 60 && average <= 70 ){
    console.log("D");
}
else if (average <= 60 ){
    console.log("F");
}


console.log(average);
    

