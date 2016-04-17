var express = require('express');
var router = express.Router();
var facebookBotToken = "EAAYfLQDRWHkBALmLuRuh6OOZBR6db9w9HXW1lbsy4CMYWrmWkyrOmfFWjLmvrFVTlDp7fMT0AdW3QXVW8iYPPB7ZAjlhCNJoqBsjZCY8pykoVZAPuN8F6vzOr2LfOhxso6UB3icYqaPYkyStlw12hPXWJeYZBIRzOi3jzVPi1WwZDZD";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === facebookBotToken) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
});

module.exports = router;
