//zadatak 8.

function convertToArray(input) {
    var arr = [];

    for (var i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            arr[i] = null;
        } else {
            arr[i] = input[i];
        }
    }
    return arr;
}

console.log(convertToArray('M MM'));

