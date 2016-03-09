var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');


router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  //console.log('Hey im Here');
  //res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );

  //console.log('Hey im displaying Tweets');
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweetsForName = tweetBank.find({name: req.params.name});
  console.log('HELOOOOOO')
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: tweetsForName, showForm: true, username: name} );
});



router.get('/tweets/:id', function(req, res){
	var id = req.params.id;
	var singleTweet = tweetBank.find({id: Number(req.params.id)});
	console.log('Hey Ive reached this Point!');
	res.render('index', {title: 'Tweet number' + id, tweets: singleTweet})
});



router.post('/tweets', function(req, res, next) {
	tweetBank.add(req.body.name, req.body.text);
	res.redirect('/');
});





module.exports = router;
