import React, { Component } from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';


export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
      <MealList listData={favMeals} navigation={this.props.navigation} />
    );
  }
}
