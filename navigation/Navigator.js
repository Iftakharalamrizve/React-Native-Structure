import React, { Component } from 'react'
import Drawer from './Drawer'
import { NavigationContainer } from '@react-navigation/native';
export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
          
        )
    }
}
