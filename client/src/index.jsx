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
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
  }
  componentDidMount() {
    Axios.get(`/movies/search/16`)
      .then(({ data }) => this.getMovies(data))
      .catch(err => console.log(err));
  }

  //TODO: RENDER FAVORITES

  //gets movies on submit from selected genre in Search componenet
  getMovies(movies) {
    this.setState({ movies: movies.slice(0, 8) });
  }

  saveMovie({ id, title, release_date, vote_average, poster_path }) {
    let options = { title, release_date, vote_average, poster_path };
    // same as above but do something diff
    //TODO: UPDATE FAVORITES
    //DON'T PUSH TO FAVORITES ON SUCCESSFUL GET
    Axios.post('/movies/save', options)
      .then(({ data }) => {
        var favorites = this.state.favorites.slice();
        favorites.push(data);
        this.setState({
          favorites
        });
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
            handleSubmit={this.getMovies}
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
