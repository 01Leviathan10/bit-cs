

function cutString(input, n) {
    var cut = '';

    for (var i = 0; i < n; i++) {
        cut += input[i];

    }
    return cut + '...';
}

console.log(cutString('Marina je glupa ko noc', 6));
