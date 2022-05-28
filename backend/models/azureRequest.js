var mongoose = require("mongoose");

var azureRequest = new mongoose.Schema({
  serviceName: {
    type: String,
  },
  OS: {
    type: String,
  },
  OStype: {
    type: String,
  },
  location: {
    type: String,
  },
  BillingCurrency: {
    type: String,
  },
  Ram: {
    type: String,
  },
  hrs: {
    type: String,
  },
  Days: {
    type: String,
  },
  total: {
    type: String,
  },
});

module.exports = mongoose.model("AzureRequest", azureRequest);
