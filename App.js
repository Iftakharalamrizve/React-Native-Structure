import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import http from "./Helpers/http";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Listview from "./components/Listview";
import Search from "./components/Search";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      itemList: [],
    };
  }

  setItemList = (itemInfos) => {
    this.setState({ itemList: itemInfos });
  };

  render() {
    return (
      <View style={styles.screen}>
        <Search onSetItem={this.setItemList} />
        <Listview itemList={this.state.itemList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTextStyle: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {},

  listContainer: {},
});

export default App;
