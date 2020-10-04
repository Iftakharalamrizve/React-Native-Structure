import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

class Listview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {/* <ScrollView>
          {this.props.itemList.map((item, i) => (
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
          ))}
        </ScrollView> */}
        <SafeAreaView>
          <FlatList
            data={this.props.itemList}
            renderItem={(item) => (
              <View style={styles.container}>
                <Image
                  source={{
                    uri: item.item.urls.small,
                  }}
                  style={styles.photo}
                />
                <View style={styles.container_text}>
                  <Text style={styles.title}>{item.item.user.name}</Text>
                  <Text style={styles.description}>
                    {item.item.alt_description}
                  </Text>
                </View>
              </View>
            )}
          ></FlatList>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: "#ccc",
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

export default Listview;
