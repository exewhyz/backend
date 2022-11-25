const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://iNote:12345678az%40@inote.zendu5b.mongodb.net/inotebook";
// const mongoURI = DATABASE;
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to Mongo Successfully');
    });
}

module.exports = connectToMongo;