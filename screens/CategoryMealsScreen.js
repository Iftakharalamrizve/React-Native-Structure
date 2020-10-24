import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { CATEGORIES,MEALS } from '../data/dummy-data';
import MealList from '../components/MealList'
class CategoryMealsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var catId = this.props.route.params.categoryId;
    const availAvaleMeal = this.props.state.filteredMeals;
    const displayedMeals = availAvaleMeal.filter(
      meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
      <MealList listData={displayedMeals} navigation={this.props.navigation} />
    );
  }
}


const mapStateToProps = state => {
  return {
    state:state
  };
};


export default connect(
  mapStateToProps
)(CategoryMealsScreen);