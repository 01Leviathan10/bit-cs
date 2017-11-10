let h = require("./Subject")

    Observer = {
     notify : function(){
        console.log( " ALERT<MEMORY>ALERT" ) }
    }
    Observer2 = {
        notify : function(){
           console.log( "BRATE FALI RAMAAAAA" ) }
       }
h.addObs(Observer);
h.addObs(Observer2);

h.run();