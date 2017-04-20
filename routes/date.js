var express = require('express');
var router = express.Router();

var date = require('../date/date');

router.post('/format', (req, res) => {
  var formatted = date.formatDate(req.body.date);
  return res.json({ date: formatted });
});

module.exports = router;
