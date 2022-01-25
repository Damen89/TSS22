// //Dichiaro una funz<ione
// function saluta(){
//     alert("Ciao dalla funzione!");
// }

// //richiamo la funzione
// // saluta();


function getNome(){
    prompt('Come ti chiami ?');
}

// getNome();


// function scriviQualcosa(){
//     document.write("Ciao dalla function ScriviQualcosa");
// }

// // scriviQualcosa();

// function eseguiTutto(){
//     saluta();
//     scriviQualcosa();
//     getNome();
// }

// eseguiTutto();


function benvenuto(){
    //VARIABILI LOCALI 
    var username = prompt('Come ti chiami ? ');
    var mess = "Ciao " + username + " benvenuto sulla pagina !";
    var elDemo = document.getElementById('demo');
    elDemo.innerHTML = mess;
}

// console.log(mess); //Questo non è visibile
//VARIABILE GLOBALE
var username = "Pippo"; 
console.log(username);

// benvenuto();
//richiamerò la funzione dalla pagina html

function scriviFeed(){
    var elFeed = document.getElementById('feedback');
    elFeed.innerHTML = '<p>Qui sotto potrai scrivere la tua recensione </p>';
    elFeed.innerHTML += '<textarea rows=10></textarea><br>';
    elFeed.innerHTML += '<button onclick="salva()"> Invia Feed </button>';
    var username = "Matteo";
    console.log("Questo è lo username in scriviFeed: " + username);
}

console.log(username);
function salva(){
    alert('Grazie per aver inviato il tuo feedback. Ciao');
}

function eseguiTutto(){
    benvenuto();
    scriviFeed();
}

//richiamo eseguiTutto sul pulsante nell' HTML