
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
export default class FavNavigator extends Component {
    render() {
        const Stack = createStackNavigator();

        return (
             <Stack.Navigator>
                <Stack.Screen name="Favorites" component={FavoritesScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        )
    }
}
