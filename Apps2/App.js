import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import {  Drawer, Item  } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CardImage from './components/CardImage';
import FotterTab from './components/FotterTab';
import Sidebar from './components/Sidebar';

export default class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  closeDrawer (){
    this.drawer._root.close();
  }

  openDrawer(){
    this.drawer._root.open();
  }
  


  render(){
    return (
      <Drawer ref={(ref) => { this.drawer = ref; }} content={<Sidebar navigator={this.navigator} />} onClose={() => this.closeDrawer()} > 
      <View style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={()=>this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='camera' />
              </Button>
            </Right>
          </Header>
          <FlatList data={[{key:'a'},{key:'b'},{key:'c'}]} renderItem={(item)=><CardImage />} />
        <FotterTab />
      </View>
       </Drawer>
      
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
