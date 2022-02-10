function auto(marca, modello, marcia, giri){
    this.marca = marca;
    this.modello = modello;
    this.marcia = marcia;
    this.giri = giri;

    this.presentaMotore = function(){
        return "Stai testando: " + this.marca + " - " + this.modello;
    }

    this.parametri = function(){
        return "Marcia: " + this.marcia +  " - Num Giri: " + this.giri ;
    }

    this.calcolaVel = function(){
        var velocita = this.marcia / (this.giri * 100);

        return "Vel calcolata: " + velocita + 'm/s';
    }


}

function prendiDati(){
    var marca = document.getElementById('marca').value;
    var modello = document.getElementById('modello').value;
    var giri = document.getElementById('giriMotore').value;
    var numMarcia = document.getElementById('numMarcia').value;

    var autoTest = new auto(marca, modello, numMarcia, giri);



    var risultato = autoTest.presentaMotore() + '<br>' + 
                    autoTest.parametri() + '<br>' +
                    autoTest.calcolaVel();
    
    return risultato;
}

function valutaMotore(){

    var demo = document.getElementById('demo');

    demo.innerHTML = prendiDati();
}