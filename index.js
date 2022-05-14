// const express = require('express');

// const app = express();

// app.listen(9000, () => {
//     console.log('serveris paleistas!');
// });

// app.get('/', (request, response) => {
//     response.send('labas');
// });

// 2022 05 14 pvz

const express = require('express');

const app = express();

app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/barista/:gerimas/:kiekis', (request, response) => {
    console.log(request.params);

    const gerimoPavadinimas = request.params.gerimas;
    const puodeliuKiekis = request.params.kiekis;

    console.log('pasiimam puodeli');
    console.log(`ipilam ${gerimoPavadinimas} i puodeli`);

    response.json(`${puodeliuKiekis} puodelis ${gerimoPavadinimas}`);
    console.log('atiduodam puodeli');

    if (puodeliuKiekis > 1) {
        console.log('tvarkom darbo vieta');
        return;
    }

    console.log('laukiam sekancio kliento');
});
