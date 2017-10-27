"use strict";
Festival.prototype.getData = function () {
    var b = '';

    for (var i = 0; i < this.listPrograms.length; i++) {
        var program = this.listPrograms[i].getData();
        b += "\t" + program + "\n";
        this.totalNumMov += this.listPrograms[i].totalNumMov;
    }
    var a = this.name + " has " + this.totalNumMov + " movie titles." + '\n';
    return a + b;
};
Genre.prototype.getData = function () {
    return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();
};

Movie.prototype.getData = function () {
    return this.name + ', ' + this.length + ', ' + this.genre.getData();
};

Program.prototype.getData = function () {
    var totalnaDuzina = 0;
    var str = '';
    for (var i = 0; i < this.listMovies.length; i++) {
        str += "\t" + this.listMovies[i].name + ', ' + this.listMovies[i].length + ', ' + this.listMovies[i].genre.getData() + "\n" + "\t";
        totalnaDuzina += this.listMovies[i].length;
        this.totalNumMov++;
    }
    var a = this.date + ', program duration: ' + totalnaDuzina + '\n' + "\t";

    return a + str;
};

(function () {

    console.log("");

    var s = new Festival("Rockfest");

    function createMovie(naziv, zanr, trajanje) {
        var b = new Movie(naziv, zanr, trajanje);
        return b;
    }
    var film1 = createMovie("Snich", "Action", 120);
    var film2 = createMovie("Inglorius Bastards", "Adventure", 153);
    var film3 = createMovie("Django", "Action", 140);

    function createProgram(date) {
        var a = new Program(date);
        return a;
    }
    var pro1 = createProgram("1.2.2001.");
    var pro2 = createProgram("2.4.2034.");
    pro1.addMovie(film1);
    pro1.addMovie(film2);
    pro2.addMovie(film2);
    pro2.addMovie(film3);
    s.addProgram(pro1);
    s.addProgram(pro2);
    console.log(s.getData());
})();

function Genre(zhanr) {
    this.name = zhanr;
   

}

function Movie(mTitle, mGenre, mLength) {
    this.name = mTitle;
    this.genre = new Genre(mGenre);
    this.length = mLength;
    
}

function Program(datum) {
    this.date = datum;
    this.listMovies = [ /*{name:"Game of THrons",genre:"Fantasy",length:190},{name:"Game of THrons",genre:"Fantasy",length:190},{name:"Game of THrons",genre:"Fantasy",length:190}, */ ];
    this.totalNumMov = 0;
    this.addMovie = function (movie) {

        this.listMovies.push(movie);
    }
    

}
//var a = new  Program("October 13, 2014 11:13:00");
//console.log(a.getData());

function Festival(ime) {
    this.name = ime;
    this.listPrograms = [];
    this.totalNumMov = 0;
    this.addProgram = function (program) {
        this.listPrograms.push(program);
    }
    
}

console.log()