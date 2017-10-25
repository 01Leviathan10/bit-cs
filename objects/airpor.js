"use strict";
(function (){
    
    function createFlight(relation,date) {
      return new Flight(relation,date);  
    }
    function createPassenger(name,surname,number,category) {
        var putnik = new Person(name,surname);
        var sediste = new Seat(number, category);
        return new Passenger(putnik,sediste);
    }

    var aedrom = new Airport();
    var let1 = createFlight("Belgrade - New York","Oct 25 2017"); 
    var let2 = createFlight("Barcelona - Belgrade","Nov 11 2017");
    var apu1 = createPassenger("John","Snow",1,"b");
    var apu2 = createPassenger("Cersei","Lannister",2,"b");
    var apu3 = createPassenger("Daenerys","Targaryen",14);
    var apu4 = createPassenger("Tyrion","Lannister");
        let1.addPassenger(apu1);
        let1.addPassenger(apu2);
        let2.addPassenger(apu3);
        let2.addPassenger(apu4);
        aedrom.addFlight(let1);
        aedrom.addFlight(let2);
    console.log(aedrom.getData());   
})();

function Person(nName, sSurname) {
    this.name = nName;
    this.surname = sSurname;
    this.getData = function() {
        return this.name  + this.surname;
    }
}

function Seat(nNumber,cCategory) {
    this.number=nNumber || Math.round((Math.random()*90)+10);
    this.category=cCategory || "e";
}
function Passenger(personObj,seatObj) {
    this.person=personObj;
    this.seat=seatObj;
    this.getData = function () {
        return this.seat.number + "," + this.seat.category + "," + this.person.getData();
       }
    
}
function Flight(rRelation,dDate) {
    this.relation=rRelation;
    this.date= dDate;
    this.listOfPassengers=[];
    this.addPassenger = function (personObj) {
        this.listOfPassengers.push(personObj);
    }
    this.getData = function () {
        return this.date + "," + this.relation;
    }
}
function Airport() {
    this.airName="Nikol Tesla";
    this.listFlights=[];
    this.addFlight = function (Flight) {
        this.listFlights.push(Flight);
    }
    this.getData = function(){
        var ukupnoPutnika = 0;
        var sanzelize="";
        for (var i = 0; i < this.listFlights.length; i++) {
            sanzelize+= "\t" + this.listFlights[i].date + ", " + this.listFlights[i].relation + "\n";
            for (var j = 0; j < this.listFlights[i].listOfPassengers.length; j++) {
                sanzelize+="\t"+"\t"+ this.listFlights[i].listOfPassengers[j].getData() + "\n";
                
            }    
        }

            
        for (var i = 0; i < this.listFlights.length; i++) {
            ukupnoPutnika+=this.listFlights[i].listOfPassengers.length;
           
        }
     return "Airport: " + this.airName + ", " + "total passengers: " + ukupnoPutnika + '\n' + sanzelize;
    }
}



