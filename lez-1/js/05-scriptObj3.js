//Notazione con new Object()

var moto = new Object();

//utilizzo la notazione punto per assegnare il valore alle prop
moto.marca = "Kawasaki";
moto.modello = "Z750";
moto.cilindrata = 750;
moto.marcia = 6;

moto.cambiaMarcia = function(marcia){
    this.marcia = marcia;
}


//Notazione con costruttore

function Studente(nome, cognome, matricola, anno){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function(){
        var desc = "Lo studente: " + this.nome + " " + this.cognome;
            desc += " è nato nel " + this.anno;
            desc += ". La sua matricola è : " + this.matricola;
            return desc;
    }
}

var studenti = [
    new Studente("Fabio", "Amoruso", 2, 1996),
    new Studente("Christian", "De La Fuente", 3, 1999),
    new Studente("Aurora", "Esposito", 4, 1998),
    new Studente("Matteo", "Gamba", 5, 1993),
    new Studente("Giuseppe", "Garone", 6, 1995)
];

for(var s in studenti){
    console.log(studenti[s].presentati());
}

for (let index = 0; index < studenti.length; index++) {
    console.log(studenti[index].presentati());
}


// var studA = {
//     nome: "Aurora",
//     cognome: "Esposito",
//     anno: 1998,
//     matricola: 4
// }

var studAJSON = '{"nome":"Aurora", "cognome":"Esposito", "anno":"1998", "matricola":"4"}';

console.log(studAJSON);

var studAObj = JSON.parse(studAJSON);

console.log(studAObj.nome);


var studAJSON2 = JSON.stringify(studAObj);

console.log(studAJSON2);

