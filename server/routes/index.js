var express = require('express');
var path = require('path');
var router = express.Router();
var sendEmail = require('../email/send_email');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({"Hello": "hhhh"});
});

router.get('/resume', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../public', 'Resume.pdf'))
});

router.post('/contact', (req, res, next) => {
  sendEmail(req.body);
  res.send({"Hello": "Goodbye"});
});

module.exports = router;
