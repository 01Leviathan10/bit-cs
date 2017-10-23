"use strict";
(function () {
    console.log("hi");
})();

function Genre(zhanr) {
    this.name = zhanr;
    this.getData = function () {
        return this.name.charAt(0).toUpperCase() + zhanr.charAt(this.name.length - 1).toUpperCase();
    }

}

function Movie(mTitle, mGenre, mLength) {
    this.name = mTitle;
    this.genre = mGenre;
    this.length = mLength;
    this.getData = function () {
        return this.name + ', ' + this.length + ', ' + this.genre.getData();
    }
}

function Program(datum) {
    this.date = datum;
    this.listMovies = [{name:"Game of THrons",genre:"Fantasy",length:190},{name:"Game of THrons",genre:"Fantasy",length:190},{name:"Game of THrons",genre:"Fantasy",length:190}, ];
    this.totalNumMov = 0;
    this.getData = function () {
        var totalnaDuzina=0;
        var str=''
        for (var i = 0; i < this.listMovies.length; i++) {
            str+=this.listMovies[i].name +', '+ this.listMovies[i].length + ', ' + this.listMovies[i].genre  +"\n";
            totalnaDuzina+=this.listMovies[i].length;          
        }
        var a= this.date +  ', ' + totalnaDuzina;
        
        return a + "\n" + str;
    }

}
var a = new  Program("October 13, 2014 11:13:00");
console.log(a.getData());

function Festival(ime) {
    this.name = ime;
    this.listPrograms = [];
    this.totalNumMov = 0;
    this.getData = function(){

    }
}