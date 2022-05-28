var mongoose = require("mongoose");

var bulkmail = new mongoose.Schema({
  to: {
    type: String,
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Bulkmail", bulkmail);
