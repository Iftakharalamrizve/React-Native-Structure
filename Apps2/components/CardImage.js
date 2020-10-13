import React, { Component } from 'react'
import { Text, Image , View } from 'react-native'
import {  Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImage extends Component {
    render() {
        return (
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/profile.jpg')} />
                <Body>
                  <Text>Iftakhar Alam Rizve</Text>
                  <Text note>Software Engineer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/profile.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>1 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
        )
    }
}
