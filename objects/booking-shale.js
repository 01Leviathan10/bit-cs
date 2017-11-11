'use strict';

// KONTINENTI 


(function () {
    Person.prototype.formatedStr = function () {
        return this.name + " " + this.surname + " " ;
    }
    Address.prototype.formatedAddress = function () {
        return this.streetNumber + " " + this.postalCode + " " + this.city + " " + this.country.name;
    }
    Player.prototype.formatedPlayer = function () {
        return "\t" + "\t" + this.country.name + " " + this.country.odds * this.betAmount
         + " " + this.person.formatedStr() + " " + (2017 - this.person.dateOfBirth) + "\n";
    } 
    BettingPlace.prototype.formatedStr = function () {
        var count = 0;
        var str = "";
        for (var i = 0; i < this.listOfPlayers.length; i++) {
            var element = this.listOfPlayers[i];
            count += element.betAmount;
            str += element.formatedPlayer();
        }
        return "\t" + this.address.street + " " + this.address.postalCode + " " + this.address.city + ", " 
        + " sum of all bets: " + ", " + count + " " + "eur" + "\n" + str ;
    }

    BettingPlace.prototype.addPlayer = function (playerObj) {
        this.listOfPlayers.push(playerObj);
    }

    BettingHouse.prototype.addBettingPlacess = function (BettingPlaceObj) {
        this.listOfBettingPlaces.push(BettingPlaceObj);
    }
    BettingHouse.prototype.final = function () {
        var totalBets = 0;
        var str2 = "";
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            totalBets += this.listOfBettingPlaces[i].listOfPlayers.length;
            str2 += this.listOfBettingPlaces[i].formatedStr(); 
        }
        return this.competition + ", " + this.listOfBettingPlaces.length + "betting places, " + totalBets + "bets" + "\n" + str2;
    }


    var eu = {
        ime: "europa"
    }
    var as = {
        ime: "asia"
    }
    var af = {
        ime: "africa"
    }
    var sa = {
        ime: "southAfrica"
    }
    var na = {
        ime: "northAmerica"
    }
    var au = {
        ime: "australia"
    }
    function createPlay(personObj, ibetAmount, contryObj) {
        var play = new Player(personObj, ibetAmount, contryObj);
        return play;
    }

    function createBattingPlace(iaddressObj) {
        var betPlace = new BettingPlace(iaddressObj);
        return betPlace;
    }

    var bettHouse = new BettingHouse("Football World Cup Winner");

    var person1 = new Person("Pera", "Peric", 1974);
    var person2 = new Person("Pera", "Peric", 1974);
    var person3 = new Person("Pera", "Peric", 1974);
    var person4 = new Person("Pera", "Peric", 1974);

    var country1 = new Country("Srbija", 10, eu);
    var country2 = new Country("Srbija", 10, eu);

    var address1 = new Address(country1, "Beograd", 11000, "Nemanjina", 4);

    var bettPlacess1 = createBattingPlace(address1);
    var bettPlacess2 = createBattingPlace(address1);

    var player1 = createPlay(person1, 100, country1);
    var player2 = createPlay(person1, 100, country1);
    var player3 = createPlay(person1, 100, country1);
    var player4 = createPlay(person1, 100, country1);

    bettPlacess1.addPlayer(player1);
    bettPlacess1.addPlayer(player2);
    bettPlacess2.addPlayer(player3);
    bettPlacess2.addPlayer(player4);

    bettHouse.addBettingPlacess(bettPlacess1);
    bettHouse.addBettingPlacess(bettPlacess2);

    console.log(bettHouse.final());
})();

// PROTOTYPE




// KONSTRUKTORI

function Country(iname, iodds, icontinentObj) {
    this.name = iname;
    this.odds = iodds;
    this.continent = icontinentObj.ime;
}

function Person(iname, isurname, idateOfBirth) {
    this.name = iname;
    this.surname = isurname;
    this.dateOfBirth = idateOfBirth;
}

function Player(personObj, ibetAmount, countryObj) {
    this.person = personObj;
    this.betAmount = ibetAmount;
    this.country = countryObj;
}

function Address(countryObj, icity, ipostalCode, istreet, iNumber) {
    this.country = countryObj;
    this.city = icity;
    this.postalCode = ipostalCode;
    this.street = istreet;
    this.number = iNumber;
}

function BettingPlace(iaddressObj) {
    this.address = iaddressObj;
    this.listOfPlayers = [];
}

function BettingHouse(icompetition) {
    this.competition = icompetition;
    this.listOfBettingPlaces = [];
    this.numOfPlayers = 0;
}