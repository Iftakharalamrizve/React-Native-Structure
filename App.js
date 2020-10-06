import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import ScrollViewPage from "./components/ScrollVIewPage";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <ScrollViewPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;
