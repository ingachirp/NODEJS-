require('dotenv').config();

const express = require('express');

const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const knygos = [
  'Tadas Blinda',
  'Zaidimu knyga',
  'Chemijos zinynas',
];

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books', (request, response) => {
  client.connect(async () => {
    const collection = client.db('knygu_projektas').collection('books');
    const result = await collection.insertOne({
      name: 'Haris poteris',
      pageCount: 700,
    });
    console.log(result);
    client.close();
  });

  response.json(knygos);
});

app.get('/books/:id', (request, response) => {
  response.json(knygos[request.params.id]);
});

app.post('/books', (request, response) => {
  const { bookName } = request.body.bookName;
  const { bookPageCount } = request.body;

  client.connect(async () => {
    const collection = client.db('knygu_projektas').collection('books');
    const result = await collection.insertOne({
      name: request.book.bookName,
      pageCount: request.body.bookPageCount,
    });
    console.log(result);
    client.close();
  });
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const toIndex = Number(request.params.to);

  const atgnybtasMasyvas = knygos.slice(fromIndex, toIndex);

  response.json(atgnybtasMasyvas);
});
