let x = require("os");
var listOfOBservers = [];
function addObs(ObsObj){
    listOfOBservers.push(ObsObj);
}
function run(){
setInterval(function(){
    
    console.log("Memory at: ",Math.floor(x.freemem()/1024/1024))
    if (x.freemem()/1024/1024 < 1000){
        for (var index = 0; index < listOfOBservers.length; index++) {
            var element = listOfOBservers[index];
            element.notify();
            
        }
    }else{
        console.log("STABLE")
    }
        
    

}, 1000);
}



module.exports = {
    run:run,
    addObs:addObs
}