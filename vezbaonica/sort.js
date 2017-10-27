var a1 = 4;
var a2 = 1;
var a3 = 10;
var resultat;
if (a1 > a2 && a1 > a3) {
    if (a2 > a3){
        resultat = a1 + "," + a2 + "," + a3;
        console.log(resultat);
    }else {
        console.log(a1 + "," + a3 + "," + a2);
    }    
    
    
} 
else if(a2 > a1 && a2 > a3){
    if (a1 > a3) {
        resultat = a2 + "," + a1 + "," + a3;
        console.log(resultat); 
    }
    else {
        console.log(a2 + "," + a3 + "," + a1);
    }
}
else if (a3 > a2 && a3 >a1) {
    if (a2 > a1){
        console.log(a3 + "," + a2 + "," + a1);
    }
    else {
        console.log(a3 + "," + a1 + "," + a2);
    }
}
