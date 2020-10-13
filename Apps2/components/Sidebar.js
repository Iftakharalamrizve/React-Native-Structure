import React, { Component } from 'react'
import { ScrollView, StyleSheet,Text, View,Image  } from 'react-native'
import {  Button } from 'native-base';

export default class Sidebar extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Side Menu</Text>
                <Button block light>
                    <Text>Light</Text>
                </Button>
                <Button block>
                    <Text>Primary</Text>
                </Button>
                <Button block success>
                    <Text>Success</Text>
                </Button>
                <Button block info>
                    <Text>Info</Text>
                </Button>
                <Button block warning>
                    <Text>Warning</Text>
                </Button>
                <Button block danger>
                    <Text>Danger</Text>
                </Button>
                <Button block dark>
                    <Text>Dark</Text>
                </Button>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff'
    },
    image: {
        resizeMode: "cover",
        opacity:1.5,
        justifyContent: "center"
      },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold",
        marginTop:50,
        marginLeft:10
      }
  });