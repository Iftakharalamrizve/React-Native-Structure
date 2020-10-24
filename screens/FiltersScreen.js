import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Switch, Platform , Button } from 'react-native';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/action/favourite';

 class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGlutenFree: false,
      isLactoseFree:false,
      isVegan:false,
      isVegetarian:false
    };
  }
   
   saveFilters() {
     const appliedFilters = {
        glutenFree: this.state.isGlutenFree,
        lactoseFree: this.state.isLactoseFree,
        vegan: this.state.isVegan,
        vegetarian: this.state.isVegetarian
     };
     this.props.setFilter(appliedFilters);
   }
   
   render() {
    
     
    const FilterSwitch = props => {
      return (
        <View style={styles.filterContainer}>
          <Text>{props.label}</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={props.state}
            onValueChange={props.onChange}
          />
        </View>
      );
    };
    
    return (
      <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={this.state.isGlutenFree}
        onChange={newValue => this.setState({isGlutenFree:newValue})}
      />
      <FilterSwitch
        label="Lactose-free"
        state={this.state.isLactoseFree}
        onChange={newValue => this.setState({isLactoseFree:newValue})}
      />
      <FilterSwitch
        label="Vegan"
        state={this.state.isVegan}
        onChange={newValue => this.setState({isVegan:newValue})}
      />
      <FilterSwitch
        label="Vegetarian"
        state={this.state.isVegetarian}
        onChange={newValue => this.setState({isVegetarian:newValue})}
        />
        
    </View>
    );
   }
   
   saveFilterOptions() {
     
   }

   componentDidMount() {

    //  this.props.navigation.setParams({ save: saveFilters });
     
     //header option set up 
     this.props.navigation.setOptions({
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item
             title="Save"
             iconName="ios-save"
             onPress={()=>{this.saveFilters()}}
           />
         </HeaderButtons>
       )
     });
   }
  
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filterObject => {
      dispatch(setFilters(filterObject));
    }
  };
};





const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FiltersScreen);