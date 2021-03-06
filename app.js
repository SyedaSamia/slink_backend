const cors = require('cors');
const bodyParser = require("body-parser");
const express = require("express")
const app = express()


//database config
const connection = require('./app/infrastructure/configuration/db.config')
connection.once('open', () => console.log('MongoDb Connected......'))
connection.on('error', () => console.log('Error.....!!!'))


const corsOptions = {
    origin: 'https://s-link.netlify.app',
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('./app/routes/get-longurl'))
app.use('/api/url', require('./app/routes/post-shorturl'))


// Listen for incoming requests
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))

