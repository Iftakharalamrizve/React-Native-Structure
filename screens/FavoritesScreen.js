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
    console.log(FavMealList);
    const favMeals = MEALS.filter(meal => FavMealList.indexOf(meal.id) != -1);
    return (
      <MealList listData={favMeals} navigation={this.props.navigation} />
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    list:state.list
  }
}

export default connect(mapStateToProps)(FavoritesScreen);