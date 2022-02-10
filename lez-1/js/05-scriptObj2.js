var auto = {
    marca: "",
    modello: "",
    cilindrata: 0,
    marcia: 0,
    velocita: 0,
    num_giri: 0,
    acceso: false,

    presentaMotore(marca, modello){
        this.marca = marca;
        this.modello = modello;
        // console.log('Stai testando: ' + this.marca + ' - ' + this.modello);
        return ('Stai testando: ' + this.marca + ' - ' + this.modello)
    },

    modificaGiri: function(num_giri){
        this.num_giri = num_giri;
        //console.log(this.num_giri + ' giri');
        return (this.num_giri + ' giri motore')
    },

    cambiaMarcia: function(marcia){
        this.marcia = marcia;
        // console.log("Hai cambiato marcia !!");
        //console.log("Sei alla marcia: " +  this.marcia);
        return("sei alla marcia " + this.marcia)
    },

    calcolaVel : function(){
        // this.presentaMotore(marca, modello); //non usato per velocità
        // this.modificaGiri(giri);
        // this.cambiaMarcia(marcia);

        this.velocita = (this.num_giri / (this.marcia * 100));

        return(" La tua velocità è di : " + this.velocita );
    }
}

var demo = document.getElementById('demo');

function valutaMotore(){
   
    var marca = document.getElementById('marca').value;
    var modello = document.getElementById('modello').value;
    var giri = document.getElementById('giriMotore').value;
    var numMarcia = document.getElementById('numMarcia').value;

    var risultato = auto.presentaMotore(marca, modello) + '<br>' + 
                    auto.modificaGiri(giri) + '<br>' + 
                    auto.cambiaMarcia(numMarcia) + '<br>' +
                    auto.calcolaVel()

    demo.innerHTML =  risultato;
    form.reset()
}