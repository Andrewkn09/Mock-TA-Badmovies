import React, { Component } from 'react';

export default class Genre extends Component {
  render() {
    return <option>{this.props.genre.name}</option>;
  }
}
