const mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost:27017/badmovies', {
    useNewUrlParser: true
  });
}

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  id: Number,
  title: String,
  poster_path: { type: String, unique: true },
  release_date: String,
  title: String,
  vote_average: Number
});

const Favorites = mongoose.model('Favorite', favoritesSchema);
module.exports.Favorites = Favorites;
