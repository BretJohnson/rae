/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import Analytics from 'mobile-center-analytics';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class rae extends Component {

  state = { joke: '...' }
  handlePress(e) {
   this.setState({joke: '...'})
   trackEvent()
   fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'text/plain' } }).then(r => r.text())
     .then(joke => this.setState({ joke }));
  }

  trackEvent() {
    Analytics.trackEvent('foobar', { 'horse': 'brown' });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.joke}
        </Text>
        <Button title='I am not laughing' onPress={() => this.handlePress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rae', () => CodePush( {installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true } ) (rae));