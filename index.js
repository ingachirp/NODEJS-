const express = require('express');

const app = express();

app.listen(9000, () => {
    console.log('serveris paleistas!');
});

app.get('/', (request, response) => {
    response.send('labas');
});