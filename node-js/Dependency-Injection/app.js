function carTransportService(){
     var transportMe = function(mesto){
         console.log("Driving to " + mesto)
     }
     return {
        transportMe:transportMe
        
     }
}
function planeTransportService(){
    var transportMe = function(mesto){
        console.log("Flying to " + mesto);
    }
    return{
        transportMe:transportMe
        
    }
}
function teleportTransportService(){
    var transportMe = function(mesto){
        console.log("Already in " + mesto);
    }
    return{
        transportMe:transportMe
    }
}
module.exports.service = teleportTransportService