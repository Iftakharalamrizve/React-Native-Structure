import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Navigator />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
