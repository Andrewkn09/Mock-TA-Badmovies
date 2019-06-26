var express = require('express');
var bodyParser = require('body-parser');
// var request = require('request');
var app = express();

// var apiHelpers = require('./helpers/apiHelpers.js');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

const movieRoutes = require('./routes/movieRoutes.js');

app.use('/movies', movieRoutes);

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('listening on port ${port}!');
});

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup
