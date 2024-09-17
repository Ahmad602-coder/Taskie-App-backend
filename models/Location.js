const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  capacity: { type: Number, required: true },
  created_by: { type: Schema.Types.ObjectId, ref: 'User'}, 
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Location', locationSchema);
