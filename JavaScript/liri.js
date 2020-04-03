require('dotenv').config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var spotifyThisSong = process.argv[2];
 
spotify.search({ type: "track", query: spotifyThisSong }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[2]);
});