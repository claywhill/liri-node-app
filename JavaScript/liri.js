require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
const cmd = process.argv[2];
const query = process.argv.slice(3).join(" ");


// OMDB
const queryURL = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
  function movieInfo(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  }
);





















































// function searchSpotify(value) {
//   spotify.search({ type: "track", query: value, limit: 1}, function (err, data) {
//     if (err) {
//       return console.log("Error occurred: " + err);
//     }
//     console.log(data.tracks.items[2]);
//   });
// }

// if (query === "") {
//     console.log("Please enter a song.")
    
// } else if (cmd === "spotify-this-song") {
// searchSpotify(query);
   
// } else if (cmd === "concert-this") {
//     // search Bands In Town API;

// } else if (cmd === "movie-this") {
//     // search OMDB API;

// } else if (cmd === "do-what-it-says") {
//     // do what is says

// } else {
//     console.log(cmd + " is not a valid command. Please enter a valid command.")
// };