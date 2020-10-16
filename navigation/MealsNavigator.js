
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
export default class MealsNavigator extends Component {
    render() {
        const Stack = createStackNavigator();

        return (
             <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        )
    }
}
