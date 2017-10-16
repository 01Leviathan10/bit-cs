 "use strict"
var global = 123;

function myFun() {
    console.log(global);
    var global = 1;
    console.log(global);
}

myFun()
                                                    