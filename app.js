var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});
app.post('/api/v1/pet_location', function(req, res){
  	if(req.get('auth') == 'aUqVokPnFANRdAANLTMKTb8c') {
		res.send('Pet: '+'Paulina);
	} else {
		res.sendStatus(403);
	}
});
app.listen(5000);
