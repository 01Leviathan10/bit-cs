var observer = function(ime){
  var name = ime;
  function uzbuna(broj){
    console.log(name + "ALER ALERT ALER " + broj)
  }
    return{
        metoda:uzbuna
    }
}
    
var main = function(){
    var n = [];
    function addObs(nekoga){
        n.push(nekoga);
    }
    function pozvatiObs(broj){
        for (var i = 0; i < n.length; i++) {
            n[i].metoda(broj);
            
        }
    }
    function run(){
        for (var i = 0; i < 100; i++) {
            if(i%11 ===0){
                pozvatiObs(i);
            }
            
        }
    } 
    
    return{
        addObs:addObs,
        
        run:run
    }
}

var o1 = observer("Misa");
var o2 = observer("Mare");
var main1 = main();
main1.addObs(o1);
main1.addObs(o2);
main1.run()


