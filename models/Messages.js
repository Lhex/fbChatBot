var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  message: String
});

module.exports = mongoose.model('Message', MessageSchema);
