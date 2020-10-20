
import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
export default class FavNavigator extends Component {
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
             <Stack.Navigator initialRouteName="Favorites" screenOptions={defaultStackNavOptions}>
                <Stack.Screen name="Favorites" component={FavoritesScreen} options={{
                    headerTitle: 'Favorites Items',
                    headerLeft:()=> (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                            title="Menu"
                            iconName="ios-menu"
                            onPress={() => {
                                this.props.navigation.toggleDrawer();
                            }}
                            />
                        </HeaderButtons>
                    )
                }} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealTitle , headerRight:()=> (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                          title="Favorite"
                          iconName="ios-star"
                          onPress={() => {
                            console.log('Mark as favorite!');
                          }}
                        />
                      </HeaderButtons>
                    ) })} />
            </Stack.Navigator>
        )
    }
}
