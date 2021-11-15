const express = require("express")

const app = express()

//const mongoose = require('mongoose')

// Database config
const connection = require('./app/infrastructure/configuration/db.config')
connection.once('open', () => console.log('MongoDb Connected......'))
connection.on('error', () => console.log('Error.....!!!'))


//Listen for incoming requests
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))