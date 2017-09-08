var mongoose = require('mongoose');

//continent schema
var continentSchema = mongoose.Schema({
	continent_name : {
		type: String,
		required: true
	},

	create_date : {
		type: Date,
		default: Date.now
	}
});

var Continent = module.exports = mongoose.model('Continent', continentSchema);

//get continents
module.exports.getContinents = function(callback, limit){
	Continent.find(callback).limit(limit);
};

//add continent
module.exports.addContinent = function(continent, callback){
	Continent.create(continent, callback);
};

//update continent
module.exports.updateContinent = function(id, continent, options, callback){
	var query = {_id: id};
	var update = {
		continent_name: continent.continent_name
	}
	Continent.findOneAndUpdate(query, update, options, callback);
};

//delete continent
module.exports.removeContinent = function(id, callback){
	var query = {_id: id};
	Continent.remove(query, callback);
};