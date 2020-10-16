import React, { Component } from 'react'
import BottomTabBar from './BottomTabBar'
import Drawer from './Drawer'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
export default class Navigator extends Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
          
        )
    }
}
