

class Person {
    constructor(nName, sSurname) {
        this.name = nName;
        this.surname = sSurname;
        this.getData = function () {
            return `${this.name}${this.surname}`;
        }
    }
}

class Seat {
    constructor(nNumber, cCategory) {
        this.number = nNumber || Math.round((Math.random() * 90) + 10);
        this.category = cCategory || "e";
    }
}
class Passenger {
    constructor(personObj, seatObj) {
        this.person = personObj;
        this.seat = seatObj;
        this.getData = function () {
            return `${this.seat.number}, ${this.seat.category}, ${this.person.getData()}`;
        }
    }

}
class Flight {
    constructor(rRelation, dDate) {
        this.relation = rRelation;
        this.date = dDate;
        this.listOfPassengers = [];
        this.addPassenger = function (personObj) {
            this.listOfPassengers.push(personObj);
        }
        this.getData = function () {
            return `${this.date}, ${this.relation}`;
        }
    }
}

function Airport() {
    this.airName = "Nikol Tesla";
    this.listFlights = [];
    this.addFlight = function (Flight) {
        this.listFlights.push(Flight);
    }
    this.getData = function () {
        let ukupnoPutnika = 0;
        let sanzelize = "";
        for (let i = 0; i < this.listFlights.length; i++) {
            sanzelize += `\t ${this.listFlights[i].date}, ${this.listFlights[i].relation} \n`;
            for (let j = 0; j < this.listFlights[i].listOfPassengers.length; j++) {
                sanzelize += `\t \t ${this.listFlights[i].listOfPassengers[j].getData()}\n`;

            }
        }


        for (let i = 0; i < this.listFlights.length; i++) {
            ukupnoPutnika += this.listFlights[i].listOfPassengers.length;

        }
        return `Airport: ${this.airName}, total passengers:  ${ukupnoPutnika}\n ${sanzelize}`;
    }
}

(() => {
    
        function createFlight(relation, date) {
            return new Flight(relation, date);
        }
    
        function createPassenger(name, surname, number, category) {
            const putnik = new Person(name, surname);
            const sediste = new Seat(number, category);
            return new Passenger(putnik, sediste);
        }
    
        const aedrom = new Airport();
        let let1 = createFlight("Belgrade - New York", "Oct 25 2017");
        let let2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
        let apu1 = createPassenger("John", "Snow", 1, "b");
        let apu2 = createPassenger("Cersei", "Lannister", 2, "b");
        let apu3 = createPassenger("Daenerys", "Targaryen", 14);
        let apu4 = createPassenger("Tyrion", "Lannister");
        let1.addPassenger(apu1);
        let1.addPassenger(apu2);
        let2.addPassenger(apu3);
        let2.addPassenger(apu4);
        aedrom.addFlight(let1);
        aedrom.addFlight(let2);
        console.log(aedrom.getData());
    })();