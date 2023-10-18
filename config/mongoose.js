const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/api');

// Code for using the cloud mongodb atlas 

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;