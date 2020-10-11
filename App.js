import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
