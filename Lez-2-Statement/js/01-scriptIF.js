//OP confronto  < > <= >=  ==  ===
var punti1 = 8; //livello 1
var punti2 = 1; //livello 2

var exit1 = 6;   //soglia1
var exit2 = 7;  //soglia2

//Per finire il gioco devo superare la soglia in entrambi i livelli
// var condizione = (punti1 >= exit1) && (punti2 >= exit2);
console.log(condizione);

//Per finirre il gioco è necessario solo il superamento di una soglia
var condizione = (punti1 >= exit1) || (punti2 >= exit2);

//STATEMENT IF

if(condizione){
    console.log("Bravo hai terminato il gioco !!");
}else{
    console.log("Non hai terminato il gioco ");
}


//OP Logici &&(AND) || (Or)  !(NOT)

// var parola = prompt('inserisci la parola d\'ordine');

// if(parola == 'ciao'){ //verifica il contenuto, senza verificare il tipo
//     console.log("Hai effettuato l'accesso");
// }else{
//     console.log('Credenziali non valide');
// }

// if(parola === 1234){ //sapendo che parola è per forza una stringa, al confronto con un numero perde
//     console.log("Hai effettuato l'accesso");
// }else{
//     console.log("Credenziali non valide");
// }


// var punteggio = 60
// var skill = 50;
// var msg = '';

// if(punteggio >= 50 && skill >= 40){
//     msg = 'Bravo, hai superato il livello'
// }else if(punteggio >= 50 && skill < 40){
//     msg= 'Devi migliorare le skill per superare il livello';
// }else if(punteggio < 50 && skill >= 40){
//     msg = 'Devi migliorare il tuo punteggio per super il livello'
// }else{
//     msg = ' Mi dispiace, fai schifo ! Datti all\'ippica';
// }

// console.log(msg);


//STATEMENT SWITCH

// var msg;
// var livello = 0;

// switch(livello) {

//     case 1:
//         msg = 'Buona fortuna per il primo livello';
//     break;

//     case 2:
//         msg = 'Ci sei riuscito, adesso ti tocca il secondo livello';
//     break;

//     case 3:
//         msg = 'Bravo, adesso ci sarà da sconfiggere il mostro';
//     break;

//     default:
//         msg = 'Benvenuto nel giuoco !';
//     break;

// }

// console.log(msg);

//OPERATORE TERNARIO
var pioggia = true;
var grandine = true;

// var decisione = (pioggia == true ? 'Prendi l\'ombrello' : 'Puoi uscire senza portare l\'ombrello');

var decisione = (pioggia == true  && grandine == true ? 'Prendi l\'ombrello e giubotto antiproiettili' : 'Puoi uscire senza portare l\'ombrello');

console.log(decisione);