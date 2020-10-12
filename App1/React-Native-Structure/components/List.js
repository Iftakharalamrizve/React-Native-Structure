import React, { Component } from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native';
class List extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <View>
                <Image />
            </View> 
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
    }
    
  });
  

export default List;