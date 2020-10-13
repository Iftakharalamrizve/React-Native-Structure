import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FotterTab extends Component {
    render() {
        return (
              <Footer>
                <FooterTab>
                  <Button vertical>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                  </Button>
                  <Button vertical active>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                  </Button>
                </FooterTab>
              </Footer>
          );
    }
}
