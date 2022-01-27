//notazione letterale

var studente = {
    //definisco proprietà e metodi
    nome: "Dario",
    cognome: "Mennillo",
    promosso: true,
    matricola: 123,
    dataNascita: new Date("04/13/1989").getFullYear(),

    superEsame: function(){
        alert('Hai superato l\' esame');
    }
}

var docente = {
    nome: "Pippo",
    cognome: "Baudo",
    dataNascita: new Date('01/01/1945').getFullYear(),
    programmi: 'Sanremo',

    conduci: function(){
        alert('Benvenuti cari studenti');
    }
}

var rettore = {
    nome: "Piero",
    cognome: "Angela",
    dataNascita: new Date('01/01/1933').getFullYear(),
    facolta: 'Super Quark'
}



//recupero il valorew di alcune propr
console.log(studente.cognome);

var demo = document.getElementById('demo');

function stampaInfo(persona){

    demo.innerHTML = '';
    // demo.innerHTML += persona.nome + '<br>';
    // demo.innerHTML += persona.cognome + '<br>';
    // demo.innerHTML += persona.matricola + '<br>';
    // demo.innerHTML += persona.dataNascita + '<br>';
    // demo.innerHTML += persona.promosso + '<br>';

    //FOR IN
    for (const prop in persona) {
        
        console.log(persona[prop]); //uso la notazione parentesi[ ] perché prop è una stringa

        if(typeof persona[prop] != "function"){
             demo.innerHTML += prop + " : " + persona[prop] + '<br>';
        }
    }

}

