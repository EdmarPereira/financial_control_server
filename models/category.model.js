const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  type: {
    type: String,
    default: undefined,
  },
  desc: {
    type: String,
    default: undefined,
  },
});

module.exports = mongoose.model('category', schema);
