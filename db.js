const mongoose = require('mongoose');
const uri = 'mongodb+srv://hackercrunch:test123@cluster0.k28yw.mongodb.net/carrot?retryWrites=true&w=majority'

const connectDB = async () => {
    await mongoose.connect (uri, {
        useUnifiedTopology : true,
        useNewUrlParser : true
    })
    console.log("mongodb has successfully connected");
}

module.exports = connectDB;