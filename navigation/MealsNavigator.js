
import React, { Component } from 'react'
import { View, Text , Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
export default class MealsNavigator extends Component {
    render() {
        const Stack = createStackNavigator();
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
            // headerTitle: ''
        };
        return (
             <Stack.Navigator initialRouteName="Categories" screenOptions={defaultStackNavOptions}>
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Category List'}}  />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        )
    }
}
