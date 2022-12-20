var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../index.html"));
  console.log(__dirname + "../../index.html");
});

module.exports = router;