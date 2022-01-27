//Valore assoluto
var abs1 = Math.abs(-96);
var abs2 = Math.abs('-50');

console.log(abs1);
console.log(abs2);

//radice
var rad1 = Math.sqrt(9);

console.log(rad1);

//Potenza
var pow = Math.pow(2,8);

console.log(pow);

//Ceil e Floor
//Ceil arrotonda all'intero superiore
//floor arrotonda all'intero inferiore

var numero = 18.4;

console.log(Math.ceil(numero));
console.log(Math.floor(numero));

console.log(Math.round(numero));

console.log(Math.trunc(numero)); //taglia le cifre dopo la virgola

console.log(Math.random()); 

console.log(Math.floor(Math.random() * 10) + 1 );