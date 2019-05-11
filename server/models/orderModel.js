var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  days: { type: Number, required: true }
});



module.exports = mongoose.model('Order', OrderSchema);