const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndexes: true
}).then( () => console.log("Connection succesfull"))
  .catch( () => console.log(err));