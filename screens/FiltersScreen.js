import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/Colors';

export default class FiltersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGlutenFree: false,
      isLactoseFree:false,
      isVegan:false,
      isVegetarian:false
    };
  }

  render() {

    const FilterSwitch = props => {
      return (
        <View style={styles.filterContainer}>
          <Text>{props.label}</Text>
          <Switch
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            // value={props.state}
            // onValueChange={props.onChange}
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
}


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