import React, { Component } from 'react'
import http from "../Helpers/http";
import { StyleSheet, Text, View , Dimensions, TextInput ,Image, TouchableOpacity} from 'react-native';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: "",
        };
    }
    render() {
        const searchItem = async () => {
            try {
                const response = await http.get("/search/photos", {
                params: { query: this.state.item },
                });
                this.props.onSetItem(response.data.results);
                this.setState({ item: "" });
            } catch (error) {}
        };

        return <View style={styles.container}>
            <View style={styles.logoSection}>
                <Image style={styles.logo} source={require("../assets/logo2.png")} />
            </View>
            <View style={styles.searchSection}>
                <TextInput style={styles.searchBox} placeholder="Search Item..."  value={this.state.itemName} onChangeText={(item) => this.setState({ item })}/>
                <TouchableOpacity>
                    <Image style={styles.searchIcon} source={require("../assets/search.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
                <Image style={styles.profile} source={require("../assets/profile.png")} />
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:60,
        width:Dimensions.get('window').width,
        marginTop:30,
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#ccc'
    },
    logoSection:{
        flex:1
    },
    logo:{
        height:40,
        width:40,
        alignSelf:'center'
    },
    searchSection:{
        flex:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    searchBox:{
        flex:3,
        height:35,
    },
    searchIcon:{
        height:20,
        width:20,
        
    },
    profileSection:{
        flex:1,
        justifyContent:'center'
    },
    profile:{
        height:30,
        width:30,
        alignSelf:'center'
    }
    
  });
  

export default Header;