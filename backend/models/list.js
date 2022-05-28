var mongoose = require("mongoose");

var list = new mongoose.Schema({
  eventName: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("list", list);
