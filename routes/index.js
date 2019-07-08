var express = require("express");
var fetch = require("node-fetch");
var crypto = require("crypto-js");
var router = express.Router();

/* GET home page. */
router.get("/:pair", function(req, res, next) {
  let pair = req.params.pair;
  var public_key = "OGVjYmU3ODc5YTExNDU5MDlhZDM1N2E0OWI5ZWIxZmQ";
  var secret_key =
    "ZjY4MjliMGI3NTlhNDllM2I2NGMzZGJmZGZmZjYwNWYzNGMyZTZlZTM2OTA0NjkwYmIyM2U2ZmI0OTcyMDY3Zg";
  var timestamp = Math.floor(Date.now() / 1000);
  var payload = timestamp + "." + public_key;
  var hash = crypto.HmacSHA256(payload, secret_key);
  var hex_hash = crypto.enc.Hex.stringify(hash);
  var signature = payload + "." + hex_hash;
  var ticker_btcusd_url = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${pair}`;
  const headers = { "X-Signature": signature };

  fetch(ticker_btcusd_url, { method: "GET", headers: headers })
    .then(res => res.json())
    .then(data => res.send(data));
});

module.exports = router;
