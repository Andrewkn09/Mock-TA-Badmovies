import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    };
    this.updateMovies = this.updateMovies.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    Axios.get(`/movies/search/16`)
      .then(({ data }) => {
        this.updateMovies(data);
        this.updateFavorites();
      })
      .catch(err => console.log(err));
  }

  updateMovies(movies) {
    this.setState({ movies: movies.slice(0, 8) });
  }

  updateFavorites() {
    Axios.get('/movies/favorites').then(({ data }) => {
      this.setState({
        favorites: data
      });
    });
  }

  saveMovie({ id, title, release_date, vote_average, poster_path }) {
    let options = { id, title, release_date, vote_average, poster_path };
    Axios.post('/movies/save', options)
      .then(result => {
        this.updateFavorites();
      })
      .catch(err => console.log('Movie already added'));
  }

  deleteMovie({ id }) {
    Axios.delete('/movies/delete', { id })
      .then(result => {
        this.updateFavorites();
      })
      .catch(err => console.log('Error deleting'));
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className='app'>
        <header className='navbar'>
          <h1>Bad Movies</h1>
        </header>

        <div className='main'>
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            handleSubmit={this.updateMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            handleClick={
              this.state.showFaves ? this.deleteMovie : this.saveMovie
            }
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
