var sum=0;
var product=1;


for (var index = 0; index < array.length; index++) {
    var element = array[index];
    sum = sum+element[index];
    product = product+element[index];
}
console.log('Suma je ' +sum);
console.log('Proizvod je ' +product);