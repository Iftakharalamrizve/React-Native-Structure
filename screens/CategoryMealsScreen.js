import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const CategoryMealScreen = props => {
  var item = props.route.params;
  return (
    <View style={styles.screen}>
      <Text>{item.name}</Text>
      <Text>{item.roll}</Text>
      <Text>{item.title}</Text>
      <Button title="Go " onPress={() => {props.navigation.navigate('MealDetail')}} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
