const mongoose = require('mongoose');
const { Schema } = mongoose;

const cafeSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Cafe = mongoose.model('Cafe', cafeSchema);

module.exports = Cafe;
