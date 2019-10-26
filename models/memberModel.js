const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hq_level: {
    type: Number,
    required: true
  },
  is_officer: {
    type: Boolean,
    default: false
  },
  events: {
    type: Number,
    default: 0
  },
  donated_old: {
    type: Number,
    default: 0
  },
  donated_new: {
    type: Number,
    default: 0
  },
  is_active: {
    type: Boolean,
    default: false
  },
  rating_m: {
    type: Number,
    default: 0.0
  },
  rating_a: {
    type: Number,
    default: 0.0
  }
});

module.exports = mongoose.model("Members", PostSchema);
