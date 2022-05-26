require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());
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
    const database = client.db('knygu_projektas');
    const collection = database.collection('books');
    const result = await collection.find({}).toArray();

    response.json(result);

    client.close();
  });
});

app.get('/books/:id', (request, response) => {
  response.json(knygos[request.params.id]);
});

app.post('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('knygu_projektas');
    const collection = database.collection('books');
    const result = await collection.insertOne({
      name: request.body.bookName,
      pageCount: request.body.bookPageCount,
    });

    response.json(result);

    client.close();
  });
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const toIndex = Number(request.params.to);

  const atgnybtasMasyvas = knygos.slice(fromIndex, toIndex);

  response.json(atgnybtasMasyvas);
});
