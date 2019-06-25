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
  poster_path: String,
  release_date: Number,
  title: String,
  vote_count: Number
});

const favorites = mongoose.model('Favorite', favoritesSchema);

module.exports.db = db;
