import React, { Component } from 'react';
import { View, Text , Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealsNavigator from './MealsNavigator'

export default class BottomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render() {
      const Tab = createMaterialBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="MealsNav"
        barStyle={{ backgroundColor: Colors.primaryColor }}
        // activeTintColor='white'
        // screenOptions={{backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''}}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
        // activeBackgroundColor='red'
        // inactiveBackgroundColor="black"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MealsNav') {
              iconName = focused
                ? 'ios-restaurant'
                : 'ios-restaurant';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-star' : 'ios-star';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen
              name="MealsNav"
              component={MealsNavigator}
              options={{
              tabBarLabel: Platform.OS === 'android' ? (
                  <Text >Meals</Text>
                ) : (
                  'Meals'
                )
              }}
          />
          <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
              tabBarLabel: Platform.OS === 'android' ? (
                  <Text  >Favorites</Text>
                ) : (
                  'Favorites'
                )
              }}
          />
      </Tab.Navigator>
    );
  }
}
