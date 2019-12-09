const mongoose = require('mongoose');

const { Schema } = mongoose;

const directorSchema = new Schema({
  id: String,
  name: String,
  age: String,
  directorId: String,
});


const Director = mongoose.model('director', directorSchema);

module.exports = {
  Director,
};
