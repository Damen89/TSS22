var nome = prompt('Come ti chiami ? ');

var saluto = "<h2> Ciao " + nome + ", benvenuto ! </h2>";

document.write(saluto);
// document.write("<h2> Ciao " + nome + ', benvenuto </h2>');

var annoCorrente = 2022;
var annoNascita = 1989;

var eta = annoCorrente - annoNascita;

var messaggio = "<p>Quest'anno avrai " + eta + " anni</p>";

document.write(messaggio);

console.log(typeof saluto);
console.log(typeof eta);
console.log(typeof document);
console.log(typeof console);



