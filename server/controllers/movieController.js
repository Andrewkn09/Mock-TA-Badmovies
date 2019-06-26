const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    let { genre } = req.params;
    apiHelpers.search(genre).then(results => {
      res.send(results);
    });
  },
  getGenres: (req, res) => {
    apiHelpers.get().then(genres => {
      res.send(genres);
    });
  },
  saveMovie: (req, res) => {
    movieModel
      .save(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getFavorites: (req, res) => {
    movieModel
      .get()
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  deleteMovie: (req, res) => {}
};
