import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import favouriteLIst from "./store/reducers/favourite";


export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const store = createStore(favouriteLIst);

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
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
