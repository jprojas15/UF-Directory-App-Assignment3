/* Fill out these functions using Mongoose queries*/

/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({ "name": "Library West" }, function(err,result) {
    if (err) throw err;
    console.log(result);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({"code": "CABL"}, function(err, result) {
    if (err) throw err;
    console.log(result);
   });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({"name": "Phelps Laboratory"}, 
        {"address": "Phelps Lab, Gainesville, FL 32603"},
        function(err, result) {
    if (err) throw err;
    console.log(result);
   });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err,result) {
    if (err) throw err;
    console.log(result);
mongoose.connection.close();
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
