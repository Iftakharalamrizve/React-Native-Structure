import React, { Component } from 'react';
import { View, Text , Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
                    initialRouteName="Meals"
                    activeColor="#e91e63"
                    labelStyle={{ fontSize: 12 }}
                    style={{ backgroundColor: 'tomato' }}
                >
                    <Tab.Screen
                        name="Meals"
                        component={CategoriesScreen}
                        options={{
                        tabBarLabel: Platform.OS === 'android' ? (
                            <Text >Meals</Text>
                          ) : (
                            'Meals'
                          ),
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-restaurant" size={25}  />
                            
                        ),
                        }}
                    />
                    <Tab.Screen
                        name="Favorites"
                        component={FavoritesScreen}
                        options={{
                        tabBarLabel: Platform.OS === 'android' ? (
                            <Text >Favorites</Text>
                          ) : (
                            'Favorites'
                          ),
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-star" size={25} />
                        ),
                        }}
                    />
                </Tab.Navigator>
    );
  }
}
