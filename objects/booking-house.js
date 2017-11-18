"use strict";

//prototype
Person.prototype.formattStringPerson = function () {
    return this.name + " " + this.surname + " " + this.dateOfBirth;
};
Player.prototype.formattStringPlayer =  function () {
    return this.zemlja.name  + " " + this.betAmount+ "euara" + " " + this.person.name + " " +this.person.surname + " " + (2017 - this.person.dateOfBirth) + "years"+ "\n" + "\t" + "\t";
};
Address.prototype.address = function () {
    return this.streatAndNumber + " " + this.postalCode + " " + this.country;
};
BettingPlace.prototype.addPlayer = function (personObj) {
    this.listOfPlayers.push(personObj);
};
BettingHouse.prototype.bettingPlace = function (bettingPlaceObj) {
    this.listOfBettingPlaces.push(bettingPlaceObj);
};
BettingPlace.prototype.bettingPlace = function () {
    var cuva = 0;
    var str1 = "";
    for (var i = 0; i < this.listOfPlayers.length; i++) {
         var element = this.listOfPlayers[i];
         cuva += element.betAmount;
         str1 += element.formattStringPlayer();
    }
    return "\t" + this.addressObj.streat + " " + this.addressObj.number + " " + this.addressObj.postalCode + " " + this.addressObj.city + ", " + "The sum of all bets: "+ cuva + "eura" + "\n"
    +"\t"+"\t" + str1;
};
BettingHouse.prototype.final = function () {
    var cuva1 = 0;
    var str2 ="";
    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        cuva1 = this.listOfBettingPlaces[i].listOfPlayers.length;
        str2 = this.listOfBettingPlaces[i].bettingPlace();
    }
    return this.competition + ", " + this.listOfBettingPlaces.length + " " + "betting places, " + cuva1+ " " + "bets" + "\n" + str2;

};

//constructor

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



function Player(personObj, betAmount, countryObj) {
   this.person = personObj;
   this.betAmount = betAmount;
   this.zemlja = countryObj;
}

function Address(countryObj, city, postalCode, streat, number) {
    this.country = countryObj;
    this.city = city;
    this.postalCode = postalCode;
    this.streat = streat;
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
    // var eU = {
    //     ime: "europa",
    // }
    // var aS = {
    //     ime: "azija",
    // }
    // var aF = {
    //     ime: "afrika",
    // }
    // var sA = {
    //     ime: "juznaAmerika",
    // }
    // var nA = {
    //     ime: "severnaAmerika",
    // }
    // var aU = {
    //     ime: "australija",
    // }

    //kontinenti
    var continent = {
        eU: "europa",
        aS: "azija",
        aF: "afrika",
        sA: "juznaAmerika",
        nA: "severnaAmerika",
        aU: "australija"
    }

    var freez = Object.freeze(continent);
    
    function createPlayer(personObj,betAmount,countryObj) {
        var igrac = new Player (personObj,betAmount,countryObj);
        return igrac;
    }
    function createBettingPlace(addressObj) {
        var adresar = new BettingPlace(addressObj);
        return adresar;
    }
    var ifBetHouse = new BettingHouse("Football World Cup Winner");
    
    var persona1 = new Person ("Pera", "Peric", 1983);
    var persona2 = new Person ("Pera", "Peric", 1983);
    var persona3 = new Person ("Pera", "Peric", 1983);
    var persona4 = new Person ("Pera", "Peric", 1983);

    
    
    
    var zemlja1 = new Country ("SR", 1050, continent.eU);
    var zemlja2 = new Country ("SR", 1050, continent.aF);
    var zemlja3 = new Country ("GR", 1050, continent.nA);
    var zemlja4 = new Country ("SR", 1050, continent.sA);

    var player1 = new Player (persona1, 2900, zemlja1);
    var player2 = new Player (persona2, 2900, zemlja2);
    var player3 = new Player (persona3, 2900, zemlja3);
    var player4 = new Player (persona4, 2900, zemlja4);
    
    var adresa1 = new Address (zemlja1, "Belgrade", 11000, "Nemanjina",16);
    var adresa2 = new Address (zemlja3, "Atina", 15000, "Pekarova",44);
    
    var kladjenje1 = new BettingPlace (adresa1);
    var kladjenje2 = new BettingPlace (adresa2);
    
    kladjenje1.listOfPlayers.push(player1);
    kladjenje2.listOfPlayers.push(player2);
    kladjenje1.listOfPlayers.push(player3);
    kladjenje2.listOfPlayers.push(player4 );

    ifBetHouse.listOfBettingPlaces.push(kladjenje1);
    ifBetHouse.listOfBettingPlaces.push(kladjenje2);

    console.log(ifBetHouse.final());

})()





