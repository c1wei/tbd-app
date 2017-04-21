var express = require('express');
var router = express.Router();

//getting the /date/date.js file
var date = require('../date/date');

//response
router.post('/format', (req, res) => {
  var formatted = date.formatDate(req.body.date);
  return res.json({ date: formatted });
});

//response
router.post('/isValid', (req, res) => {
  var isValid = date.isValidDate(req.body.date2);
  return res.json({ valid: isValid }); 
});

module.exports = router;
