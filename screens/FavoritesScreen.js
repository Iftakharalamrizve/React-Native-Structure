import React, { Component } from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { connect } from 'react-redux'

 class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var FavMealList = this.props.list;
    //  const favMeals = [FavMealList.filter(meal => availableMeal.indexOf(meal.id) != -1)];
    // const favMeals = FavMealList.filter((meal) => {
    //   this.props.filterMeal.find()
    // })
    // var self = this;
    // const favMeals = FavMealList.filter(meal => {
    //   if (self.props.filterMeal.indexOf(meal.id) != -1) {
    //     return true;
    //   } 
    //   return false;
    // })
    console.log(favMeals)
    return (
      <MealList listData={FavMealList} navigation={this.props.navigation} />
    );
  }
}


const mapStateToProps = (state)=>{
  return{
    list: state.favoriteMeals,
    filterMeal:state.filteredMeals
  }
}

export default connect(mapStateToProps)(FavoritesScreen);