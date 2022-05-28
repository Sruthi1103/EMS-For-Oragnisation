const nodemailer = require("nodemailer");
const Bulkmailer = require("../models/bulkmail");
const list = require("../models/list");

exports.sendmail = (req, res) => {
  const Name = req.body.to;

  list.find({ eventName: Name }, (err, values) => {
    var To_address = "";
    var ca;
    values
      .map((values) => {
        console.log("value --" + values.email);
        To_address += values.email + ",";
        return values.email;
      })
      .sort();

    console.log("the string : ---" + To_address);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sruthinair2018@gmail.com",
        pass: "113217205050",
      },
    });
    var mailOptions = {
      from: "sruthinair2018@gmail.com", // sender address
      to: To_address, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.description,
      html: `
            <div style="padding:10px;border-style: ridge">
            <p>${req.body.description}</p>
            <h3>Contact Details</h3>
            `,
    };
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ status: true, respMesg: "Email Sent Successfully" });
      } else {
        res.json({ status: true, respMesg: "Email Sent Successfully" });
      }
    });
  });
};

exports.findEmail = (req, res) => {
  const Name = req.body.eventName;

  list.find({ eventName: Name }, (err, values) => {
    let ca = values
      .map((values) => {
        return values.email;
      })
      .sort();
    console.log(ca);
    res.json({ status: true, respMesg: ca });
  });
};
