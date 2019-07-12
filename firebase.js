var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDfQSg6fFd4z0aQCFxiQxQRKaWlazYB5n4",
  authDomain: "stock-market-dcca3.firebaseapp.com",
  databaseURL: "https://stock-market-dcca3.firebaseio.com",
  projectId: "stock-market-dcca3",
  storageBucket: "",
  messagingSenderId: "470810977036",
  appId: "1:470810977036:web:7f22c55e7aea3185"
};
firebase.initializeApp(config);

module.exports = firebase;
