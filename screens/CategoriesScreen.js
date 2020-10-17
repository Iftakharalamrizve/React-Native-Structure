import React, { Component } from 'react';
import { View, Text ,FlatList  } from 'react-native';
// import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

     const renderGridItem = itemData => {
      return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            this.props.navigation.navigate('CategoryMeals',{
                categoryId: itemData.item.id
              });
          }}
        />
      );
     };
    
    return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    );
  }
}
