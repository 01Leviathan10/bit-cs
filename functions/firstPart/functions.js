function sabiranje(a, b) {
    return a + b;
}

function oduzimanje(a, b) {
    return a - b;
}

function mnozenje(a, b) {
    return a * b;
}

function deljenje(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function print(x) {
    console.log("////" + x + "////")
}

function first(str) {
    if (typeof str != "string") {
        return null;
    } else {
        return str[0];
    }
}

function sabiranje(a, b) {
    if (isFinite(a) == true && isFinite(b) == true) {
        return a + b;
    } else {
        return "Error!";
    }

}
