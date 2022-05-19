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

console.log(process.env);

const knygos = [
  'Tadas Blinda',
  'Zaidimu knyga',
  'Chemijos zinynas',
];

app.listen(9000, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const toIndex = Number(request.params.to);

  const atgnybtasMasyvas = knygos.slice(fromIndex, toIndex);

  response.json(atgnybtasMasyvas);
});
