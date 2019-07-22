var express = require("express");
var crypto = require("crypto-js");
var firebase = require("../firebase");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  var userEmail = req.query.userEmail;
  try {
    firebase
      .database()
      .ref()
      .child("Favorites")
      .child(crypto.MD5(userEmail).toString())
      .once("value", favorites => {
        res.send(favorites);
      });
  } catch (e) {
    console.log("Error:", e);
  }
});

router.post("/", function(req, res, next) {
  var userEmail = req.query.userEmail;
  var favorites = req.body.favorites;
    try {
    firebase
      .database()
      .ref()
      .child("Favorites")
      .child(crypto.MD5(userEmail).toString())
      .set(favorites);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.log("Error:", e);
  }
});

module.exports = router;
