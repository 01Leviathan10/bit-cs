function primeNumber(number){
    
    for(i=2; i<number; i++){
        if(number%i === 0){
            return 'Nije prost broj';
        }
        else{
            return 'Broj je prost.';
        }
    }   
    
}
console.log(primeNumber(7));