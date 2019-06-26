import React, { Component } from 'react';

export default class MovieEntry extends Component {
  render() {
    const { movie, handleClick } = this.props;
    let url = movie.poster_path
      ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
      : `https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg`;
    return (
      <li className='movie_item'>
        <img
          src={url}
          onClick={() => {
            handleClick(movie);
          }}
        />
        <div className='movie_description'>
          <h2>{movie.title}</h2>
          <section className='movie_details'>
            <div className='movie_year'>
              <span className='title'>Year</span>
              <span>{movie.release_date.substring(0, 4)} </span>
            </div>
            <div className='movie_rating'>
              <span className='title'>Rating</span>
              <span>{Number(movie.vote_average).toFixed(2)}</span>
            </div>
          </section>
        </div>
      </li>
    );
  }
}
