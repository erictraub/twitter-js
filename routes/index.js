var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');



router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  //console.log('Hey im Here');
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  //console.log('Hey im displaying Tweets');
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} ); // TWEETBANK CALLED TWEETS?
  console.log(list)
  //res.render('Im something stupid')
  res.render( 'index', { title: 'Twitter.js - Posts by '+ list[0].name, list: list} );
});





module.exports = router;
