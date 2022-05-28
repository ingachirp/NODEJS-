require('dotenv').config();
const cors = require('cors');
const { response } = require('express');
const { request } = require('express');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
} = require('mongodb');

const uri = 'mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('DB_CRUD');
    const collection = database.collection('books');
    const result = await collection.find({}).toArray();

    response.json(result);

    client.close();
  });
});

app.post('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('DB_CRUD');
    const collection = database.collection('books');
    const result = await collection.insertOne({
      title: request.body.title,
      pageCount: request.body.pageCount,
      price: request.body.price,
    });

    response.json(result);

    client.close();
  });
});

app.delete('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('DB_CRUD');
    const collection = database.collection('books');
    const result = await collection.deleteOne({
      _id: ObjectId(request.body.id),
    });
    client.close();

    response.json(result);
  });
});

// dirba su front-end'u https://knygos.netlify.app/
