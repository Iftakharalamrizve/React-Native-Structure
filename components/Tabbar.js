import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Tabbar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}>
          <Icon name="home" size={25} style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon name="whatshot" size={25} style={styles.icon} />
          <Text style={styles.text}>WhatsHot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon name="subscriptions" size={25} style={styles.icon} />
          <Text style={styles.text}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon name="add-alert" size={25} style={styles.icon} />
          <Text style={styles.text}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Icon name="folder" size={25} style={styles.icon} />
          <Text style={styles.text}>Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
  text: {
    fontSize: 14,
    textAlign: "center",
    justifyContent: "center",
    color: "rgb(50,50,50)",
    paddingTop: 2,
  },
});
