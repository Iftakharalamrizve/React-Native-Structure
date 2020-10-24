import React, { Component } from 'react';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { View, StyleSheet } from 'react-native';
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
    if (FavMealList.length === 0 || !FavMealList) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(FavoritesScreen);