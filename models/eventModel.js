const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  action1: {
    type: Number,
    default: -1
  },
  action2: {
    type: Number,
    default: -1
  },
  action3: {
    type: Number,
    default: -1
  },
  facilities: {
    type: Number,
    default: 0
  },
  prepared: {
    type: Boolean,
    default: false
  },
  score: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Event", PostSchema);
