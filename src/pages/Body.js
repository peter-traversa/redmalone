import React, { Component } from 'react';
import { Image } from 'react-native';
import chess from '../../assets/chess.jpg';

class Body extends Component {
  render() {
    return (
      <Image source={chess} />
    )
  }
}

export default Body;