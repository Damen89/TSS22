var films = [{
        titolo: "El Camino",
        durata: 122,
        anno: 2019,
        locandina: 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg',
        genere: 'Drammatico',
        attori: ['Aaron Paul', 'Jonathan Banks', 'Matt Jones']
    },

    {
        titolo: "Avatar",
        durata: 162,
        anno: 2009,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        genere: 'Fantascienza',
        attori: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
    },

    {
        titolo: "The Wolf of Wall Street",
        durata: 180,
        anno: 2013,
        locandina: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        genere: 'Drammatico',
        attori: ['Leonardo Di Caprio', 'Matthew McConaughey', 'Jonah Hill']
    },
    {
        titolo: "Interstellar",
        durata: 162,
        anno: 2014,
        locandina: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        genere: 'Drammatico',
        attori: ['Michael Caine', 'Matthew McConaughey', 'Anne Hathaway']
    },
    {
        titolo: "Barry Lyndon",
        durata: 185,
        anno: 1975,
        locandina: "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        genere: 'Storico',
        attori: ['Ryan O\'Neal', 'Marisa Berenson', 'Patrick Magee']
    }
]


var titolo = document.getElementById("titolo");
var locandina = document.getElementById("locandina");
var attori = document.getElementById("cast");
var durata = document.getElementById("durata");
var anno = document.getElementById("anno");
var genere = document.getElementById("genere");

function trovaFilm(index) {
    titolo.innerHTML = films[index].titolo;
    locandina.src = films[index].locandina;
    var elenco = "";
    for (let i = 0; i < films[index].attori.length; i++) {
        elenco += "<li><a href='https://it.wikipedia.org/wiki/" + films[index].attori[i].replace(/ /g, "_") +
            "'>" + films[index].attori[i] + "</li>";
    }
    attori.innerHTML = elenco;
    durata.innerHTML = "durata: " + films[index].durata;
    anno.innerHTML = "anno: " + films[index].anno;
    genere.innerHTML = films[index].genere;
}

var contatore = 0;

function ruota(dir) {
    if (dir == 'p') {
        if (contatore >= films.length - 1) {
            contatore = 0;
        } else {
            contatore++;
        }
    } else {
        if (contatore == 0) {
            contatore = films.length - 1;
        } else {
            contatore--;
        }
    }

    trovaFilm(contatore);
}


document.getElementsByName('body').onload = trovaFilm(0);


//Prendere un Obj scritto in JS e trasformare in notazione JSON
var mioJSON = JSON.stringify(films[0]);
console.log(mioJSON)

//Prendo un obj formato JSOn, lo trasformo in un oggetto JS
var filmJSON = '{"Title":"Barry Lyndon","Year":"1975","Rated":"PG","Released":"18 Dec 1975","Runtime":"185 min","Genre":"Adventure, Drama, History","Director":"Stanley Kubrick","Writer":"Stanley Kubrick, William Makepeace Thackeray","Actors":"Ryan O\'Neal, Marisa Berenson, Patrick Magee","Plot":"An Irish rogue wins the heart of a rich widow and assumes her dead husband\'s aristocratic position in 18th-century England.","Language":"English, German, French","Country":"United Kingdom, United States","Awards":"Won 4 Oscars. 19 wins & 15 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.1","imdbVotes":"161,449","imdbID":"tt0072684","Type":"movie","DVD":"18 Aug 2008","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}'
var mioOBJ = JSON.parse(filmJSON);
console.log(mioOBJ);