const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model('Event', eventSchema);
