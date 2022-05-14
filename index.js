// const express = require('express');

// const app = express();

// app.listen(9000, () => {
//     console.log('serveris paleistas!');
// });

// app.get('/', (request, response) => {
//     response.send('labas');
// });

// 2022 05 14 uzduotis

// 
const express = require('express');
const app = express();

const knygos = [
    "Tadas Blinda",
    "Zaidimu knyga",
    "Chemijos zinynas"
]

app.listen(3000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/books', (request, response) => {
    response.json(knygos);
});

app.get('/books/:id', (request, response) => {
    
    const knygosPavadinimas = request.params.id;
    response.json(knygos[request.params.id]);
        
});