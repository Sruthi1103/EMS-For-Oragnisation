require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const authRoutes = require("./routes/auth");
const router = express.Router();
const app = express();
var csv = require("csvtojson");

//Starting DB
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB CONNECTED");
});

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable

/*var cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen("8080", host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });*/

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
//routes

app.use("/", authRoutes);

//App port
const port = process.env.PORT || 3000;

//Starting server
app.listen(port, () => {
  console.log(`Web app is always running at ${port}`);
});
