import React from 'react';
import Axios from 'axios';
import Genre from './Genre.jsx';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selected: 28
    };
    this.getGenres = this.getGenres.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //Gets list of movies of selected genre type & updates movie list
  getGenres() {
    Axios.get(`/movies/search/${this.state.selected}`)
      .then(({ data }) => this.props.handleSubmit(data))
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    });
  }

  componentDidMount() {
    return Axios.get('/movies/genres').then(({ data }) => {
      this.setState({
        genres: data
      });
    });
  }

  render() {
    return (
      <div className='search'>
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />
        <select onChange={this.handleChange}>
          {this.state.genres.map(genre => {
            return <Genre key={genre.id} genre={genre} />;
          })}
        </select>
        <br />
        <br />

        <button onClick={this.getGenres}>Search</button>
      </div>
    );
  }
}

export default Search;
