function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;
    return area;
}

var areaGLO = calcolaArea(4, 5);

console.log("L'area vale: " + areaGLO);


function calcolaVolume(altezza, largh, prof){
    // return altezza * larghezza * prof;
    var area = calcolaArea(altezza, largh);
    return area * prof;
}


// console.log("Il volume vale: " + calcolaVolume(4,6,5));
console.log("Il volumee è : " + calcolaVolume(6,5,4));

//ricavare i paramatri da HTML