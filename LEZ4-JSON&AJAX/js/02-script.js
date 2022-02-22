var demo = document.querySelector('#demo');

//Recupero dati da API este
// Metodo Fetch

// const url = 'https://jsonplaceholder.typicode.com/posts';

// var dati = [];

// fetch(url)
//     .then(data => {
//         return data.json()
//     })
//     .then(response => {
//         //console.log(response);
//         for (var i = 0; i < response.length; i++) {
//             this.dati.push(response[i]);
//             demo.innerHTML += '<li>testo: ' + response[i].body + '</li>'
//         }
//     })

// console.log(dati)


const url = 'https://jsonplaceholder.typicode.com/photos';

var dati = [];

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(response => {
        //console.log(response);
        for (var i = 0; i < 20; i++) {
            this.dati.push(response[i]);
            demo.innerHTML += '<li><img src=' + response[i].thumbnailUrl + '></li>'
        }
    })

console.log(dati)


// const urlOK = 'http://localhost:8080/Prj30_Jukebox/api/cantanti';

// var dati = [];

// async function getData(url) {

//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin',
//         mode: 'no-cors',
//     });

//     return response;
// }

// getData(urlOK)
//     .then(data => {
//         console.log(data);
//     })