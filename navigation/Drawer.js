import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FiltersScreen from '../screens/FiltersScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabBar from './BottomTabBar'
import FiltersNavigator from './FiltersNavigator'
import Colors from '../constants/Colors';
export default class Drawer extends Component {
  
    render() {
      const Drawer = createDrawerNavigator();
      return (
        <>
        <Drawer.Navigator initialRouteName="Meals" drawerContentOptions={{activeTintColor:Colors.accentColor}}>
            <Drawer.Screen name="Meals" component={BottomTabBar} />
            <Drawer.Screen name="Filter" component={FiltersNavigator} />
        </Drawer.Navigator>
        </>
    );
  }
}
