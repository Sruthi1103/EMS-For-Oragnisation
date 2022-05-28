const AzureRequest = require("../models/azureRequest");

exports.calc = (req, res) => {
  var hrs = req.body.hrs;
  var days = req.body.Days;
  var service = req.body.serviceName;
  var location = req.body.location;
  var currency = req.body.BillingCurrency;
  const azure = new AzureRequest(req.body);

  if (service === "Virtual Machines") {
    var symp = "";

    if (currency === "USD") {
      symp = "$";
    } else {
      symp = "Rs. ";
    }

    var tot = hrs * days * 16;
    res.json({
      total: symp + tot,
    });
    azure.total = symp + tot;
    azure.save();
    return res;
  }
};

exports.getRequests = (req, res) => {
  const requests = AzureRequest.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  //res.json(requests);
  //console.log(res);
  //return res;
};
