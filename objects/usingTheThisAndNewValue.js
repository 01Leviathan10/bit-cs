
var stefan = {
    debeo: true,
    visina: 23,
    godine: 23,

}

function Person(debeo) {
    this.debeo = debeo;
    this.visina = 23;
    this.godina = 23;
    this.talk = function(){
        console.log("This is my age " + this.godina + "!");
    }
   
};
var stefan = new Person(33);
stefan.talk();




var speaker = {
    name: "Marko",
    course: "CS/JS",
    yearOFbirth: 1992,
    boring: false,
    school: {
        name: "BIT",
        address: "Nemanjina4",
        isOpen: true,
        students: ["Pera", "Mika", "Zika"]
    },





    speak: function () {
        return "Bla Bla";
    }
}

// console.log(speaker.school.isOpen);


var Marko = {
    visina: 150,
    tezina: "laka kategorija",
    programer: false,
    koder: false,
    developer: true,
    sport: "kara-te",
    apple: "funboi",
    francuz: true,
    frensh: function () { console.log("Champs-Élysées") }


}


function Jovan() {  
    this.occupation = 'student';
    
    
}

var jovan = new Jovan();
jovan.occupation;

function Hero(param,parametar){
    return{
        name: param,
        alias: parametar
    };
    
}

var x = Hero('Mile', 'Batman');
console.log(x);

function Brr() {
    this.secondName = 'Kitic';
    this.name = 'Mile';
}

var y = new Brr();
console.log(y);


