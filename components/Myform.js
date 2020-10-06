import React, { Component } from 'react'
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native';
class MyForm extends Component {
    render() {
        return <View style={styles.container}>
            <View >
                <TextInput style={styles.input} placeholder="Eneter Your Email"></TextInput>
                <TextInput style={[styles.input,styles.password]} placeholder="Eneter Password "></TextInput>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.8)',
        paddingLeft:15
    },
    password:{
        marginTop:15
    },
    buttonContainer:{
        backgroundColor:'#33B522',
        marginTop:15,
        paddingVertical:8
    },
    buttonTitle:{
        color:'white',
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold'
    }
    
  });
  

export default MyForm;