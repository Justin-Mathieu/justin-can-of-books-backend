'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_URL);

const BookModel = require('./models/book');

async function seed() {
    const book = new BookModel({
        title: 'Html & CSS',
        description: 'Text book from Code Fellows 102 and 201.',
        status: 'I dont know what to put here'
    });

    book.save(function (err) {
        if (err) console.error(err);
        else console.log('book saved')
    });
    await BookModel.create({
        title: 'JavaScript & Jquery',
        description: 'Textbook for Code Fellows 102 and 201',
        status: 'status of what?'
    });
    console.log('second book saved');

    await BookModel.create({

        title: '1984',
        description: 'A classic',
        status: '...'

    })
    console.log('book three saved')

    mongoose.disconnect();

}
seed();