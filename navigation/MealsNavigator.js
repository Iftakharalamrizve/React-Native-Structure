
import React, { useEffect, useCallback,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text , Platform , Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
const MealsNavigator = (props)=> {
        const [currentMealIsFavorite,setFav] = useState(true);
        const mealId = props.route.params.mealId; 
        const dispatch = useDispatch();

        const toggleFavoriteHandler = useCallback(() => {
            dispatch(toggleFavorite(mealId));
        }, [dispatch, mealId]);

        useEffect(() => {
            // props.navigation.setParams({ mealTitle: selectedMeal.title });
            props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
          }, [toggleFavoriteHandler]);

          
        useEffect(() => {
            props.navigation.setParams({ isFav: currentMealIsFavorite });
          }, [currentMealIsFavorite]);
        

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

        const Favourite = ()=>{
            const isFavorite = props.route.params.isFav;
            return isFavorite?'ios-star':'ios-star-outline'
        }
        
        // const isFavorite = props.route.params.isFav;
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
                                props.navigation.toggleDrawer();
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
                          iconName={Favourite()}
                          onPress={() => {
                            setFav(true)
                          }}
                        />
                      </HeaderButtons>
                    ) })} />
            </Stack.Navigator>
        );
}

export default MealsNavigator;
