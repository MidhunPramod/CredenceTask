const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
  },
});

module.exports = Movie = mongoose.model("movie", MovieSchema);
