var mongoose = require("mongoose");

var upload = new mongoose.Schema({
  csvfile: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Upload", upload);
