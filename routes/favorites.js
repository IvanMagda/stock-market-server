var express = require("express");
var firebase = require("../firebase");
var router = express.Router();

/* GET users listing. */
router.get("/t", function(req, res, next) {
  res.send("respond with a resource");
  firebase
    .database()
    .ref("/Favorites")
    .set({ user: "Test User 2", pair: "BTC-USD" });
});

module.exports = router;
