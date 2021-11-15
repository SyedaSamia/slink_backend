//Exposing Mongo DB URI from env file

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;


module.exports = db