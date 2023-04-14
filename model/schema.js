const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  Name: String,
  Email: {
    type: String,
    unique: true,
    require: true,
  },
  isPromoted: {
    type: Boolean,
    default: null,
  },
});

const user = mongoose.model("userdata", schema);

module.exports = user;
