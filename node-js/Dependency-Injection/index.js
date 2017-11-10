var x  = require("./app.js");
var doSomeWork =function(transportService, a){
    transportService.transportMe(a);
}
doSomeWork( new x.service(), "GRCKAAAAA");