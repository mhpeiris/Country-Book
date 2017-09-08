var mongoose = require('mongoose');

//country schema
var countrySchema = mongoose.Schema({
	name : {
		type: String,
		required: true
	},

	continent_name : {
		type: String,
		required: true
	},

	population : {
		type: String,
		required: true
	},

	map_pic_url : {
		type: String,
		required: true
	},

	create_date : {
		type: Date,
		default: Date.now
	}
});

var Country = module.exports = mongoose.model('Country', countrySchema);

//get countries
module.exports.getCountries = function(callback, limit){
	Country.find(callback).limit(limit);
};

//get countries
module.exports.getCountryById = function(id, callback){
	Country.findById(id, callback);
};

//add country
module.exports.addCountry = function(country, callback){
	Country.create(country, callback);
};

//update country
module.exports.updateCountry = function(id, country, options, callback){
	var query = {_id: id};
	var update = {
		name: country.name,
		continent_name: country.continent_name,
		population: country.population,
		map_pic_url: country.map_pic_url
	}
	Country.findOneAndUpdate(query, update, options, callback);
};

//delete country
module.exports.removeCountry = function(id, callback){
	var query = {_id: id};
	Country.remove(query, callback);
};