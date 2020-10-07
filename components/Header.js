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
        <View style={styles.cnt1}>
          <Text>1</Text>
        </View>
        <View style={styles.cnt1}>
          <Text>2</Text>
        </View>
        <View style={styles.cnt1}>
          <Text>3</Text>
        </View>
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
    padding: 10,
    borderBottomWidth: 3,
    borderColor: "#ccc",
    backgroundColor: "#B8C6FA",
  },
  cnt1: {
    flex: 1,
    backgroundColor: "orange",
  },
  cnt2: {
    flex: 2,
    backgroundColor: "red",
  },
  cnt3: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default Search;
