var posmatrac = function () {
    function pevac(name) {
        console.log(name + name);
    }
    return {
        nasumicno : pevac
    }
}

var gol = function () {
    var x = posmatrac();
    function poredi() {
        for (var i = 0; i <100 ; i++) {
            if (i%2 === 0 && i%5 === 0) {
                x.nasumicno(i);
            }
            
        }

    }  
    return {poredi};  
    
}
var spoon = gol();

spoon.poredi()