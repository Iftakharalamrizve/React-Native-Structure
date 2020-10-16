
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen from '../screens/FiltersScreen';
export default class FiltersNavigator extends Component {
    render() {
        const Stack = createStackNavigator();

        return (
             <Stack.Navigator>
                <Stack.Screen name="Filters" component={FiltersScreen} />
            </Stack.Navigator>
        )
    }
}
