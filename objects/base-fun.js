function convert(num,base,newNumber){
   var numberConverted = parseInt(num,base);
   var output = numberConverted.toString(newNumber);
   return output;

}
console.log(convert('FF',16,10));


