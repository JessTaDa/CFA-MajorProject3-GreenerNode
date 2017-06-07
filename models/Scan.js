const mongoose = require('mongoose');
const { Schema } = mongoose;

const scanSchema = new Schema({
  v: {
    type: String,
    trim: true
  },

  cafe_id: {
    type: String,
    trim: true
  },

  address: {
    type: String,
    trim: true
  },

  count: {
    type: Number,
    trim: true
  },

  created_at: {
    type: Date,
    default: Date.now
  }
});

const Scan = mongoose.model('Scan', scanSchema);

module.exports = Scan;
