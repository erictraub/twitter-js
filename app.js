var express = require('express');
var app = express();

app.use(function(request, response, next){
	console.log(request.method, request.originalUrl, response.statusCode);
	next();
})

app.use("/special", function(request, response){
	response.send(' ')
	console.log('you reached the special area')
})


app.get("/", function(request, response){
	response.send('Welcome Message	 	')
})
app.get('/news', function(request, response){
	response.send('News Here')
})


app.listen(3000);
console.log('server listening...');