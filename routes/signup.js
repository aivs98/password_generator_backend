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
  console.log("register");
  db.one("insert into userdata (user_id,user_password,user_name,user_mail) values ($1,$2,$3,$4)", [req.body.user_id,req.body.user_password,req.body.user_name,req.body.user_mail])
    .then(
        res.status(200).send({
            message: "Successfully Added",
            
        })
    )
    .catch(function (err) {
      res.status(200).send({
        message: err,
      });
    });
});

module.exports = router;
