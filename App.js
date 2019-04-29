import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import chess from './assets/chess.jpg'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={chess} />
        <Text>redmalone says ciao, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
