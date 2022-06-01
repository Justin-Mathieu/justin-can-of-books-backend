'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_URL);
const BookModel = require('./models/book');

async function clear() {
    try {
        await BookModel.deleteMany({})
        console.log('deleted books');
    } catch (error) {
        console.error('something happeded in the delete', error);
    } finally {
        mongoose.disconnect();
    }
}
clear();