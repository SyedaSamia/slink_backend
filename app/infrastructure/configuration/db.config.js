require('dotenv').config();
const mongoose = require('mongoose')


//Set up default mongoose connection
mongoose.connect("mongodb+srv://simchang0:0012@cluster0.e9on7.mongodb.net/url?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("Connected to DB"))
.catch(err => console.log(err));

//Get the default connection
const db = mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
        }).on('error', function(error){
     console.log('Error is: ', error);
      });

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// export the connection object
module.exports = db
