import { StatusBar } from "expo-status-bar";
import React from "react";
import http from "../Helpers/http";
import { StyleSheet, View, TextInput, Button } from "react-native";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
  }

  render() {
    const searchItem = async () => {
      try {
        const response = await http.get("/search/photos", {
          params: { query: this.state.item },
        });
        this.props.onSetItem(response.data.results);
        this.setState({ item: "" });
      } catch (error) {}
    };

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextStyle}
          value={this.state.itemName}
          onChangeText={(item) => this.setState({ item })}
        ></TextInput>
        <Button style={styles.buttonStyle} title="Add" onPress={searchItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Search;
