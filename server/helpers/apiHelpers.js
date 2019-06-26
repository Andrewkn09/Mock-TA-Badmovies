// const request = require('request');
const axios = require('axios');
const  API_KEY  = process.env.API_KEY || require('../../config.js').API_KEY;

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

module.exports.search = genre => {
  var url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genre}`;
  return axios.get(url).then(({ data }) => {
    return data.results;
  });
};

module.exports.get = () => {
  var url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return axios.get(url).then(({ data }) => {
    return data.genres;
  });
};
