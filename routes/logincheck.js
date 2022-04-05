const express = require("express");
const router = express.Router();
const db = require("../db");
var cors = require("cors");

router.use(
  cors({
    origin: "*",
  })
);

router.post("/", (req, res) => {
  console.log("post");
  db.one("select * from userdata where user_id = $1", req.body.user_id)
    .then(function (data) {
      if (data.user_password == req.body.user_password) {
        res.status(200).send({
          message: "Success",
          alert: `Welcome ${data.user_name}`,
        });
      } else { 
        res.status(200).send({
          message: "Wrong Password",
        });
      }
    })
    .catch(function (err) {
      console.log(err);
      res.status(200).send({
        message: "User doesnt exist",
      });
    });
});

module.exports = router;
