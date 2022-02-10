var torte = [];





//funzione per la scadenza dell'offerta
function scadenza(oggi){
    var settDaOggi, day, date, month, year, nomeGiorni, nomeMesi;

    settDaOggi = new Date(oggi.getTime() + (7 * 24 * 60 * 60 * 1000));

    nomeGiorni = ['Domenica','Lunedì', 'Martedì', 'Giovedì', 'Venerdì', 'Sabato'];
    nomeMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Settembre', 'Ottobre', 'Nov', 'Dic'];

    day = nomeGiorni[settDaOggi.getDay()];
    date = settDaOggi.getDate();
    month = nomeMesi[settDaOggi.getMonth()];
    year = settDaOggi.getFullYear();

    var msg = " Le offerte scadrnno il: ";
    msg += day + " ( " + date + " " + month + " " + year + " ) ";
    return msg;
}

var oggi = new Date();

var offertaFine = document.getElementById('offertaFine');
offertaFine.innerHTML = scadenza(oggi);

