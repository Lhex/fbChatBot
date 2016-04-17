var express = require('express');
var router = express.Router();
var facebookBotToken = "EAAYfLQDRWHkBALmLuRuh6OOZBR6db9w9HXW1lbsy4CMYWrmWkyrOmfFWjLmvrFVTlDp7fMT0AdW3QXVW8iYPPB7ZAjlhCNJoqBsjZCY8pykoVZAPuN8F6vzOr2LfOhxso6UB3icYqaPYkyStlw12hPXWJeYZBIRzOi3jzVPi1WwZDZD";
var Message = require('../models/Messages.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === facebookBotToken) {
    console.log(req.body);
    var newMessage = Message({
      message: req.body.entry[0].messaging[0].message.text
    });
    newMessage.save(function(err){
      if(err)
        throw next(err);
      console.log("message created!");
    });
  } else {
    res.send('Error, wrong validation token');
  }
});

module.exports = router;
