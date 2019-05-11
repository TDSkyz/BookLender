var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: String,
    trim: true,
    required: true
  },
  Categories: [
    { type: Schema.Types.ObjectId, ref: 'Category' }
  ]
});



module.exports = mongoose.model('Book', BookSchema);