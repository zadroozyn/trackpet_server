var express = require('express');
var app = express();
var mongoose = require('mongoose');
var PetLocation = require('./app/models/PetLocation');


app.get('/', function(req, res){
  res.send('hello world');
});

app.use(express.bodyParser());

app.post('/api/v1/pet_location', function(req, res){
  	if(req.get('auth') == 'aUqVokPnFANRdAANLTMKTb8c') {
		let locationInfo = req.body;
		console.log(locationInfo);
		mongoose.connect('mongodb://localhost/trackpet');
		let pLocation = new PetLocation({
			timestamp: locationInfo.timestamp,
			lat: lcationinfo.lat,
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
