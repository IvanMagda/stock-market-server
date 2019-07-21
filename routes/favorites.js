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
      .on("value", favorites => {
        res.send(favorites);
      });
  } catch (e) {
    console.log("Error:", e);
  }
});

router.post("/", function(req, res, next) {
  var userEmail = req.query.userEmail;
  res.send("respond with a resource");
  firebase
    .database()
    .ref("/Favorites")
    .set({ user: "Test User 2", pair: "BTC-USD" });
});

module.exports = router;
