import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Body from './src/pages/Body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
