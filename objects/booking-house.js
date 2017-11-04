"use strict";

Person.prototype.formattStringPerson = function () {
    return this.name + " " + this.surname + " " + this.dateOfBirth;
}
Player.prototype.formattStringPlayer =  function () {
    return this.countryObj.name  + " " + this.betAmount + " " + this.personObj.name + " " +this.personObj.surname + " " + 2017 - this.personObj.dateOfBirth;
}
Address.prototype.address = function () {
    return this.streatAndNumber + " " + this.postalCode + " " + this.country;
}
BettingPlace.prototype.addPlayer = function (personObj) {
    this.listOfPlayers.push(personObj);
}
BettingPlace.prototype.bettingPlace = function () {
    var cuva = 0;
    var str1 = "";
    for (var i = 0; i < this.listOfPlayers.length; i++) {
         var element = this.listOfPlayers[i];
         cuva += element.betAmount;
         str1 += 
    }
    return this.addressObj.streat + " " + this.addressObj.number + " " + this.addressObj.postalCode + " " + this.addressObj.city + " " + cuva;
}
BettingHouse.prototype.bettingPlace = function () {
    var cuva1 = 0;
    
}

function Country(name,odds,elementofcountry) {
    this.name = name;
    this.odds = odds;
    this.continent = elementofcountry;
}

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}



function Player(personObj, betAmount, country) {
   this.person = personObj;
   this.betAmount = betAmount;
   var zemlja = new Country(country);
}

function Address(countryObj, city, postalCode, streat, number) {
    this.country = countryObj;
    this.city = city;
    this.postalCode = postalCode;
    this.street = streat;
    this.number = number;


}

function BettingPlace(addressObj) {
    this.addressObj = addressObj;
    this.listOfPlayers = [];
}
function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;
    
}

(function () {
    var eU = {
        ime: "europa",
    }
    var aS = {
        ime: "azija",
    }
    var aF = {
        ime: "afrika",
    }
    var sA = {
        ime: "juznaAmerika",
    }
    var nA = {
        ime: "severnaAmerika",
    }
    var aU = {
        ime: "australija",
    }
    
    function okretac(personObj,betAmount,countryObj) {
        var igrac = new Player (personObj,betAmount,countryObj);
        return igrac;
    }
    function prekretac(addressObj) {
        var adresar = new BettingPlace(addressObj);
        return adresar;
    }
    var ifBetHouse = new BettingHouse("Football World Cup Winner");
    
    var persona1 = new Person ("Pera", "Peric", 1983);
    var persona2 = new Person ("Pera", "Peric", 1983);
    var persona3 = new Person ("Pera", "Peric", 1983);
    var persona4 = new Person ("Pera", "Peric", 1983);

    
    
    var zemlja1 = new Country ("SR", 1050, eU.ime);
    var zemlja2 = new Country ("SR", 1050, eU.ime);
    var zemlja3 = new Country ("GR", 1050, eU.ime);
    var zemlja4 = new Country ("SR", 1050, eU.ime);
    
    var adresa1 = new Address (zemlja1, "Belgrade", 11000, "Nemanjina",16);
    var adresa2 = new Address (zemlja3, "Belgrade", 11000, "Nemanjina",16);
    
    var kladjenje1 = new BettingPlace (adresa1);
    var kladjenje2 = new BettingPlace (adresa2);
    
    kladjenje1.listOfPlayers.push(persona1);
    kladjenje2.listOfPlayers.push(persona2);
    kladjenje1.listOfPlayers.push(persona3);
    kladjenje2.listOfPlayers.push(persona4);

    ifBetHouse.listOfBettingPlaces.push(kladjenje1);
    ifBetHouse.listOfBettingPlaces.push(kladjenje2);

})()




