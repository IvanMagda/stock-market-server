var express = require("express");
var fetch = require("node-fetch");
var crypto = require("crypto-js");
var router = express.Router();

/* GET home page. */
router.get("/proxy", function(req, res, next) {
  let path = req.query.path;
  var public_key = "OGVjYmU3ODc5YTExNDU5MDlhZDM1N2E0OWI5ZWIxZmQ";
  var secret_key =
    "ZjY4MjliMGI3NTlhNDllM2I2NGMzZGJmZGZmZjYwNWYzNGMyZTZlZTM2OTA0NjkwYmIyM2U2ZmI0OTcyMDY3Zg";
  var timestamp = Math.floor(Date.now() / 1000);
  var payload = timestamp + "." + public_key;
  var hash = crypto.HmacSHA256(payload, secret_key);
  var hex_hash = crypto.enc.Hex.stringify(hash);
  var signature = payload + "." + hex_hash;
  var proxy_url = `https://apiv2.bitcoinaverage.com/${path}`;
  const headers = { "X-Signature": signature };

  fetch(proxy_url, { method: "GET", headers: headers })
    .then(res => res.json())
    .then(data => res.send(data));
});

module.exports = router;
