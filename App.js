import * as React from 'react';
import { View, Text } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator'
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <MealsNavigator />
    );
  }
}

export default App;