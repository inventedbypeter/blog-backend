const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    commentor: String,
    timeStamp: String,
    avatarpic: String,
    commentContent : String,
    blogId: String
})

module.exports = mongoose.model('Comments', CommentsSchema);