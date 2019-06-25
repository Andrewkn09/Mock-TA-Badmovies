import React, { Component } from 'react';

export default class Genre extends Component {
  render() {
    const { id, name } = this.props.genre;
    return <option value={id}>{name}</option>;
  }
}
