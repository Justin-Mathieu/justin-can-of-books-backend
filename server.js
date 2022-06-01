'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const BookModel = require('./models/book');


mongoose.connect(process.env.MONGOOSE_URL)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected')
});

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})
app.get('/books', async (request, response) => {
  const books = await BookModel.find({})
  response.send(books)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
