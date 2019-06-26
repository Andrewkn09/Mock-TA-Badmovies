import React from 'react';
import MovieEntry from './MovieEntry.jsx';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <ul className='movies'>
        {movies.map(movie => {
          return (
            <MovieEntry
              key={movie.id}
              movie={movie}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default Movies;
