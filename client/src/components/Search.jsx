import React from 'react';
import Axios from 'axios';
import Genre from './Genre.jsx';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
    this.getGenres.bind(this);
  }

  getGenres() {}

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
        <select>
          {this.state.genres.map(genre => {
            return <Genre key={genre.id} genre={genre} />;
          })}
          {/* <option value='theway'>The Way</option>
          <option value='thisway'>This Way</option>
          <option value='thatway'>That Way</option> */}
        </select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
