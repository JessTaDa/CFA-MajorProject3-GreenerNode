const mongoose = require('mongoose');
const { Schema } = mongoose;

const scanSchema = new Schema({
  version: {
    type: String,
    trim: true
  },

  cafeid: {
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
