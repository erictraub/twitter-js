var express = require('express');
var app = express();

app.get("/", function(request, response){
	response.send('Welcome Message	 	')
})
app.get('/news', function(request, response){
	response.send('News Here')
})
app.listen(3000);
console.log('server listening...');