
import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Platform } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/action/favourite';
import Colors from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const FavNavigator = (props)=> {
         const state = useSelector(state => state);
        const dispatch = useDispatch();
        const Stack = createStackNavigator();
        const defaultStackNavOptions = {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            // headerTitle: ''
        };
        const Favourite = (mealInfo)=>{
            const favMeals = state.favoriteMeals;
            const status = favMeals.some(meal => meal.id === mealInfo);
            return status?'ios-star':'ios-star-outline'
        }
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
                                props.navigation.toggleDrawer();
                            }}
                            />
                        </HeaderButtons>
                    )
                }} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} options={({ route }) => ({ title: route.params.mealTitle , headerRight:()=> (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Favorite"
                        iconName={Favourite(route.params.mealId)}
                        onPress={() => {
                            dispatch(toggleFavorite(route.params.mealId))
                        }}
                    />
                    </HeaderButtons>
                ) })} />
            </Stack.Navigator>
        )
}

export default FavNavigator;