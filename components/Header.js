import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Datasoft</Text>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput} placeholder="Search Item..." />
          <TouchableHighlight style={styles.searchIcon}>
            <Text>Search</Text>
          </TouchableHighlight>
        </View>
        <Image style={styles.logo} source={require("../assets/cart.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: Dimensions.get("screen").width,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 3,
    borderColor: "#ccc",
  },
  logo: {
    flex: 1,
    height: 52,
    marginLeft: 15,
  },
  title: {
    flex: 2,
    textAlign: "left",
    fontSize: 20,
  },
  searchSection: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    // flex: 3,
    // flexDirection: "row",
    // alignItems: "center",
  },
  searchInput: {
    flex: 3,
    alignItems: "center",
    height: 30,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dotted",
  },
});

export default Search;
