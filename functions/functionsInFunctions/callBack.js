

var importNumbers = function (num1, num2, num3) {
    var prazanniz = []
    for (var i = 0; i < arguments.length; i++) {
        var result = arguments[i] * 2;
        prazanniz[i] = result;
    }
    return prazanniz;
}
console.log(importNumbers(1, 2, 3));

var squaringNumbers = function (array) {
    var puniniz = []
    for (var i = 0; i < array.length; i++) {

        var result = array[i] * array[i];
        puniniz[i] = result;
    }

    return puniniz;
}
console.log(squaringNumbers(1));



