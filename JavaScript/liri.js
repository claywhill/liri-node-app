require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var cmd = process.argv[2];
var query = process.argv.slice(3).join(" ");

function searchSpotify(value) {
  spotify.search({ type: "track", query: value }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    console.log(data.tracks.items[2]);
  });
}

if (query === "") {
    console.log("Please enter a song.");
    
} else if (cmd === "spotify-this-song") {
  searchSpotify(query);

} else if (cmd === "concert-this") {
    // search Bands In Town API;

} else if (cmd === "movie-this") {
    // search OMDB API;

} else if (cmd === "do-what-it-says") {
    // do what is says

} else {
    console.log(cmd + " is not a valid command. Please enter a valid command.")
};
