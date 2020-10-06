import React, { Component } from 'react'
import { StyleSheet, Text, View , Image, KeyboardAvoidingView} from 'react-native';
import MyForm from './Myform'
class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <KeyboardAvoidingView style={styles.container}>
            <View style={styles.logocontainer}>
                <Image style={styles.logo}  source={require('../logo.png')}/>
                <Text style={styles.title} >Login Chat Room</Text>
            </View>
            <View style={styles.formcontainer}>
                <MyForm />
            </View>
        </KeyboardAvoidingView>;
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logocontainer:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100
    },
    title:{
        color:'white',
        fontSize:23,
        paddingTop:3,
        fontWeight:'bold'
    },
    formcontainer:{
        flex:2
    }
  });