var express = require('express');
var app = express();
var mongoose = require('mongoose');
var PetLocation = require('./app/models/PetLocation.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('hello world');
});


app.post('/api/v1/pet_location', function(req, res){
  	if(req.get('auth') == 'aUqVokPnFANRdAANLTMKTb8c') {
		console.log(req.body);
		var locationInfo = req.body;
		mongoose.connect('mongodb://localhost/trackpet');
		var pLocation = new PetLocation({
			timestamp: Date.now(),
			lat: locationInfo.lat,
			lon: locationInfo.lon
		}); 	
		pLocation.save(function(err) {
  			if (err) throw err;
  			console.log('Pet Location created!');
		});
		res.send('Pet: '+'Paulina');
	} else {
		res.sendStatus(403);
	}
});

function requireAuthentication(req,res) {

}

app.listen(5000);
