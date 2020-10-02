import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import http from "./Helpers/http";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function App() {
  const [itemName, setItem] = useState("");
  const [itemList, setList] = useState([]);

  const addNewItem = async () => {
    try {
      const response = await http.get("/search/photos", {
        params: { query: itemName },
      });
      setList(response.data.results);
      setItem("");
    } catch (error) {}
  };

  const ItemRenderContent = () => {
    return itemList.map((item, i) => {
      return (
        <View style={styles.container} key={i}>
          <Image
            source={{
              uri: item.urls.small,
            }}
            style={styles.photo}
          />
          <View style={styles.container_text}>
            <Text style={styles.title}>{item.user.name}</Text>
            <Text style={styles.description}>{item.alt_description}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextStyle}
          value={itemName}
          onChange={(e) => setItem(e.target.value)}
        ></TextInput>
        <Button style={styles.buttonStyle} title="Add" onPress={addNewItem} />
      </View>
      {ItemRenderContent()}
    </View>
  );
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

  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
  description: {
    fontSize: 11,
    fontStyle: "italic",
  },
  photo: {
    height: 50,
    width: 50,
  },
});
