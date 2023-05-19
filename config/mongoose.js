
const mongoose = require('mongoose');
const env = require('./environment');
//connect to database
mongoose.connect(`mongodb+srv://mrpkdmk01:PKpk0101@cluster0.arefsb5.mongodb.net/?retryWrites=true&w=majority`);

//acquire the connection to check if the connection is established successfully
const db = mongoose.connection;

//validate if error connecting
db.on('error', console.error.bind('error in connecting to the db'));

//validate if connected successfully
db.once('open', function(){
  console.log('Successfully connected to the database');
});
