
import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen from '../screens/FiltersScreen';
export default class FiltersNavigator extends Component {
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
             <Stack.Navigator  screenOptions={defaultStackNavOptions}>
                <Stack.Screen name="Filters" component={FiltersScreen}  options={{
                    headerTitle: 'Filter Items',
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
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                            title="Save"
                            iconName="ios-save"
                            // onPress={route.params.save}
                            />
                        </HeaderButtons>
                    ),
                }}/>
            </Stack.Navigator>
        )
    }
}

