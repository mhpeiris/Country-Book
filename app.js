var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Continent = require('./models/continent');
Country = require('./models/country');

//Connect to mongoose
mongoose.connect('mongodb://localhost/country_app', {
	useMongoClient: true,
});
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Use /api/continents or /api/countries');
});

app.get('/api/continents', function(req, res) {
	Continent.getContinents(function(err, continents){
		if(err){
			throw err;
		}
		res.json(continents);
	});
});

//post continent
app.post('/api/continents', function(req, res) {
	var continent = req.body;
	Continent.addContinent(continent, function(err, continent){
		if(err){
			throw err;
		}
		res.json(continent);
	});
});

//put(update) continent
app.put('/api/continents/:_id', function(req, res) {
	var id = req.params._id;
	var continent = req.body;
	Continent.updateContinent(id, continent, {}, function(err, continent){
		if(err){
			throw err;
		}
		res.json(continent);
	});
});

//delete continent
app.delete('/api/continents/:_id', function(req, res) {
	var id = req.params._id;
	Continent.removeContinent(id, function(err, continent){
		if(err){
			throw err;
		}
		res.json(continent);
	});
});

app.get('/api/countries', function(req, res) {
	Country.getCountries(function(err, countries){
		if(err){
			throw err;
		}
		res.json(countries);
	});
});


app.get('/api/countries/:_id', function(req, res) {
	Country.getCountryById(req.params._id, function(err, country){
		if(err){
			throw err;
		}
		res.json(country);
	});
});

app.post('/api/countries', function(req, res) {
	var country = req.body;
	Country.addCountry(country, function(err, country){
		if(err){
			throw err;
		}
		res.json(country);
	});
});

//put(update) country
app.put('/api/countries/:_id', function(req, res) {
	var id = req.params._id;
	var country = req.body;
	Country.updateCountry(id, country, {}, function(err, country){
		if(err){
			throw err;
		}
		res.json(country);
	});
});

//delete country
app.delete('/api/countries/:_id', function(req, res) {
	var id = req.params._id;
	Country.removeCountry(id, function(err, country){
		if(err){
			throw err;
		}
		res.json(country);
	});
});

app.listen(3030);
console.log('Nodejs server running on port 3030...');