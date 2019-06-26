import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
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

  saveMovie({ title, release_date, vote_average, poster_path }) {
    let options = { title, release_date, vote_average, poster_path };
    Axios.post('/movies/save', options)
      .then(result => {
        updateFavorites;
      })
      .catch(err => console.log(err));
  }

  deleteMovie() {
    // same as above but do something diff
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
            handleSave={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
