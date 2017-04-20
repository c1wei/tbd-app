var express = require('express');
var router = express.Router();

var hello = require('./hello');
var date = require('./date');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/date', date);
router.use('/hello', hello);

module.exports = router;
