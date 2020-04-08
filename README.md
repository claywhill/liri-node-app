# liri-node-app
<img src = "node-liri-screenshot.jpg" width = "500">
<a href = "https://drive.google.com/file/d/1-5aznZlZloVpOjms0tw2v5DwYkBCtTZB/view">Watch Video</a>

## Usage
1. Clone the repo
1. npm install axios, Node-Spotify-API, Moment, DotEnv
1. Get our own Spotify API key
1. Copy your API key into .env
   * SPOTIFY_ID=your-spotify-id
   * SPOTIFY_SECRET=your-spotify-secret

## Tech Used
* JavaScript
* Node.js

* **Packages**
  * [axios](https://www.npmjs.com/package/axios)
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)
  
* **APIs**
  * [Spotify](https://developer.spotify.com/documentation/web-api/)
  * [OMDB](http://www.omdbapi.com/)
  * [Bands In Town](https://www.artists.bandsintown.com/support/api-installation)

## Commands
* movie-this
* concert-this
* spotify-this-song
* do-what-it-says

## What this app does
Using the commands, this app will display:
* **node liri.js movie-this movie title**
  * Title of the movie
  * Year the movie came out
  * IMDB Rating of the movie
  * Rotten Tomatoes Rating of the movie
  * Country where the movie was produced
  * Language of the movie
  * Plot of the movie
  * Actors in the movie
  
* **node liri.js concert-this band/artist**
  * Name of the venue
  * Venue location
  * Date of the event
  
* **node liri.js spotify-this-song song**
  * Artist(s)
  * The song's name
  * A preview of the song from Spotify
  * The album that the song is from
  

* **node liri.js do-what-it-says**
  * Whatever text is written in the random.txt file will be read and executed based on the written command and search term.
