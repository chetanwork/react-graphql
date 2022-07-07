const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    age: Number,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('book', bookSchema);