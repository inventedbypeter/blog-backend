const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema ({
    title: String,
    author: String,
    timeStamp: String,
    picture: String,
    content: String
})

module.exports = mongoose.model('Blog', BlogSchema);