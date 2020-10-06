import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";

class ScrollVIewPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={styles.outer1}>
          <Text style={styles.inner}>Well Come To FIrst Page</Text>
        </View>
        <View style={[styles.outer1, styles.outer2]}>
          <Text style={styles.inner}>Well Come To Second Page</Text>
        </View>
        <View style={[styles.outer1, styles.outer3]}>
          <Text style={styles.inner}>Well Come To Third Page</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  outer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bb6",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  outer2: {
    backgroundColor: "#dd4b39",
  },
  outer3: {
    backgroundColor: "#27ae60",
  },
  inner: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ScrollVIewPage;
