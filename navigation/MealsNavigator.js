
import React, { Component } from 'react'
import { View, Text , Platform , Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
export default class MealsNavigator extends Component {

    constructor(props) {
        super(props)
    }

    render() {
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Favorite"
    //       iconName="ios-star"
    //       onPress={() => {
    //         console.log('Mark as favorite!');
    //       }}
    //     />
    //   </HeaderButtons>
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
                <Stack.Screen name="Categories" component={CategoriesScreen}  options={{
                    headerTitle: 'Meal Categories',
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
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}  options={({ route }) => ({ title: route.params.categoryTitle + ' Meals List' })} />
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
