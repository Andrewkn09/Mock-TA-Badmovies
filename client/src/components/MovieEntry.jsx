import React, { Component } from 'react';

export default class MovieEntry extends Component {
  render() {
    const { title } = this.props.movie;
    return (
      <li className='movie_item'>
        <img src='https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300' />
        <div className='movie_description'>
          <h2>{title}</h2>
          <section className='movie_details'>
            <div className='movie_year'>
              <span className='title'>Year</span>
              <span>2018</span>
            </div>
            <div className='movie_rating'>
              <span className='title'>Rating</span>
              <span>10.0</span>
            </div>
          </section>
        </div>
      </li>
    );
  }
}
