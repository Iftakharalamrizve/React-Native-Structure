import React, { Component } from 'react'
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Navigator extends Component {
    render() {
        const defaultStackNavOptions = {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTitleStyle: {
                
            },
            headerBackTitleStyle: {
                // fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'Header Title'
        };


        const Stack = createStackNavigator();
        const Tab = createMaterialBottomTabNavigator();
        return (
            <NavigationContainer>
                {/* <Stack.Navigator initialRouteName="Categories" screenOptions={defaultStackNavOptions}>
                    <Stack.Screen name="Categories" component={CategoriesScreen} />
                    <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
                    <Stack.Screen name="Filters" component={FiltersScreen} />
                    <Stack.Screen name="Favorites" component={FavoritesScreen} />
                </Stack.Navigator> */}

                <Tab.Navigator
                    initialRouteName="Categories"
                    activeColor="#e91e63"
                    labelStyle={{ fontSize: 12 }}
                    style={{ backgroundColor: 'tomato' }}
                    
                    >
                    <Tab.Screen
                        name="Categories"
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
                            <Text >Meals</Text>
                          ) : (
                            'Favorites'
                          ),
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-star" size={25} />
                        ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
