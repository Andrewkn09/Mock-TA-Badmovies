//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')
const Favorites = require('../../db/mongodb/').Favorites;

module.exports = {
  save: movie => {
    return Favorites.create(movie);
  },
  get: () => {
    return Favorites.find();
  },
  delete: id => {
    return Favorites.deleteOne(id);
  }
};
