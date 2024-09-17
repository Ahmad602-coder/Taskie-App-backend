const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
  priority: { type: String },
  due_date: { type: Date },
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  assigned_to: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', TaskSchema);
