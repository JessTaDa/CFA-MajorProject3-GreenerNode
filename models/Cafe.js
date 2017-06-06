const mongoose = require('mongoose');
const { Schema } = mongoose;

const cafeSchema = new Schema({
  v: {
    type: String,
    trim: true
  },

  name: {
    type: String,
    trim: true
  },

  address: {
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
