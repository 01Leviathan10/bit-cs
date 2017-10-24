"use strict";
(function (){
    var p1 = new Person("Marko", "Milicevic") ;
    var s1 = new Seat(73);
    var ps1 = new Passenger(p1,s1);
    console.log(ps1);
})();

function Person(nName, sSurname) {
    this.name = nName;
    this.surname = sSurname;
    this.getData()
}

function Seat(nNumber,cCategory) {
    this.number=nNumber || Math.floor((Math.random()*100)+10);
    this.category=cCategory || "e";
}
function Passenger(personObj,seatObj) {
    this.person=personObj;
    this.seat=seatObj;
}
function Flight(rRelation,dDate,lListOfPassengers) {
    this.relation=rRelation;
    this.date= dDate;
    this.listOfPassengers=0;
    this.getData = function () {
        return this.date + "," +this.relation;
    }
}
function Aurport() {
    this.airName="Nikol Tesla";
    this.list=[];
}



