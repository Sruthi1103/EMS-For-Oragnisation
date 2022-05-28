var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");

const { sendmail, findEmail } = require("../controllers/sendMail");
const { mail } = require("../controllers/mail");
const { calc, getRequests } = require("../controllers/calc");
router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 3 char").isLength({ min: 3 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 3 }),
  ],
  signin
);

router.get("/signout", signout);

router.post("/upload", mail);

router.post("/sendmail", sendmail);

router.post("/findEmail", findEmail);
router.post("/find", calc);
router.get("/getRequests", getRequests);

module.exports = router;
