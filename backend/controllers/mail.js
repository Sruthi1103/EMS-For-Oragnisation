var mongoose = require("mongoose");
var csvtojson = require("csvtojson");
const list = require("../models/list");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Upload = require("../models/upload");

exports.mail = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keyExtensions = true;
  var csvfilename;
  const newPath = process.env.CSV_UPLOAD_PATH;
  function csvRead() {
    var arrayToInsert = [];
    csvtojson()
      .fromFile(newPath)
      .then((source) => {
        for (var i = 0; i < source.length; i++) {
          var oneRow = {
            eventName: source[i]["EventName"],
            email: source[i]["Email"],
          };

          list.insertMany({
            email: oneRow.email,
            eventName: oneRow.eventName,
          });
          arrayToInsert.push(oneRow);
        }
        console.log(source.length + "pushed to the db");
      });
  }
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "file is not parsed....",
      });
    }
    let product = new Upload(fields);
    //console.log(file);
    if (file.csvfile) {
      csvfilename = file.csvfile.filepath;
      console.log("filename ---------------" + csvfilename);
      product.csvfile.data = fs.readFileSync(file.csvfile.filepath);
      product.csvfile.contentType = file.csvfile.originalFilename;
    }
    product.save((err, product) => {
      //console.log(product);
    });
    fs.readFile(file.csvfile.filepath, function (err, data) {
      fs.writeFile(newPath, data, function (err) {
        fs.unlink(file.csvfile.filepath, function () {
          if (err) throw err;
          console.log("File uploaded to: " + newPath);
          csvRead();
          res.json({
            message: "successfully updated DB with csv values !!",
          });
        });
      });
    });
  });
  console.log();
};
