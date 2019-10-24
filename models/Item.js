const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  cover: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  popularity: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
