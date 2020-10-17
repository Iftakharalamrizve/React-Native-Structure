import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CATEGORIES,MEALS } from '../data/dummy-data';
import MealList from '../components/MealList'
export default class CategoryMealsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var catId = this.props.route.params.categoryId;
    console.log(catId)
    const displayedMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
      <MealList listData={displayedMeals} navigation={this.props.navigation} />
    );
  }
}
