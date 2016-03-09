var express = require('express');
var app = express();
var swig = require('swig');
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
var routes = require("./routes");
var bodyParser = require('body-parser');





app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', routes)  

// // swig stuff
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

// app.get('/', function(response, request){
// 	response.send();
// })

//app.use(express.static('public'));










app.use(function(request, response, next){
	console.log(request.method, request.originalUrl, response.statusCode);
	console.log('Im right before next()')

	next();
})

console.log('hey im static')

app.use(express.static('public'));



// app.use("/special", function(request, response){
// 	response.send(' ')
// 	console.log('you reached the special area')
// })


// app.get("/", function(request, response){
// 	response.render( 'index.html', {title: 'Hall of Fame', people: people} );
// })
// app.get('/news', function(request, response){
// 	response.send('News Here')
// })


app.listen(3000);
console.log('server listening...');
