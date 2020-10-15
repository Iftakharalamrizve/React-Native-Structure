import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go .. " onPress={() => {props.navigation.navigate('CategoryMeals',{name:'Iftakhar Alam',roll:'12121',title:'software engineer'})}} />
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

export default CategoriesScreen;
