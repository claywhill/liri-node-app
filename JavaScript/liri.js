require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
var cmd = process.argv[2];
var query = process.argv.slice(3).join(" ");


// Movie-This
function movieThis(query) {

if (query === "") {
  query = "Good Will Hunting";
}

var movieURL = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";

  axios.get(movieURL).then(
    function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
  });
}

// Concert-This


function concertThis(query) {
  
  var bandsURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";

  axios.get(bandsURL).then(
    function(response) {
      console.log("Venue: " + response.data[0].venue.name);
      console.log("Location: " + response.data[0].venue.city + " " + response.data[0].venue.region);
      console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
  });
}

// Spotify-This
function spotifyThis(query) {

  if (query === "") {
    query = "It's Tricky";
  }

  spotify.search({ type: "track", query: query, limit: 1}, function(err, data) {
        if (err) {
          return console.log("Error occurred: " + err);
        }

        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[0].preview_url);
  });
}

// Do What is Says
function doWhat() {

  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
  
    var dataArr = data.split(",");
    cmd = dataArr[0];
    query = dataArr[1];
    
    if (cmd === "spotify-this-song") {
      spotifyThis(query);
    
    } else if (cmd === "concert-this") {
      concertThis(query);
    
    } else if (cmd === "movie-this") {
      movieThis(query);
    }

  });
}

if (cmd === "spotify-this-song") {
  spotifyThis(query);

} else if (cmd === "concert-this") {
  concertThis(query);

} else if (cmd === "movie-this") {
  movieThis(query);

} else if (cmd === "do-what-it-says") {
  doWhat();

} else {
  console.log('Your "Node Liri" Options are: movie-this, concert-this, spotify-this-song, do-what-it-says');
}