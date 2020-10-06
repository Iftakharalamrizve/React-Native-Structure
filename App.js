import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
} from "react-native";
import Header from "./components/Header";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <Header />
        <Text>dsfds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});

export default App;
