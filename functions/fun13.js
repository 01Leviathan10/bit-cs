var temp = ['Marina', "Ivan", 12, 66, null, 34];


function convertoToNumbers(arr) {
    var num = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        var toInt = parseInt(arr[i]);
        if (typeof toInt === 'number' && !isNaN(toInt)) {
            num[j] = arr[i];
            j++;
        }
    }
    return num;
}

console.log(convertoToNumbers(temp));

