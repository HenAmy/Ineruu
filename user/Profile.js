import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const Profile = () => {
    return (
        <Screen>
            <ListItem image={require("../assets/adaptive-icon.png")} title="Name" subTitle="Phone"/>
            <TouchableOpacity style={styles.listItem} onPress={() => console.log('Selling')}>
                <Icon name="pencil-sharp" size={20}/>
                <Text style={{ fontSize: 17, marginLeft:5 }}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem} onPress={() => console.log('Selling')}>
                <Icon name="pricetags-sharp" size={20}/>
                <Text style={{ fontSize: 17, marginLeft:5 }}>Sell an item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem} onPress={() => console.log('Selling')}>
                <Icon name="cart-sharp" size={20}/>
                <Text style={{ fontSize: 17, marginLeft:5 }}>My Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem} onPress={() => console.log('Selling')}>
                <Icon name="heart-sharp" size={20}/>
                <Text style={{ fontSize: 17, marginLeft:5 }}>Favourites</Text>
            </TouchableOpacity>
            
            <View style={{ flex: 1, flexDirection: 'row', alignContent: "flex-end"}}>
                <TouchableOpacity style={styles.button} onPress={() => console.log(Logout)}>
                <Text style={{ fontSize: 17, marginLeft:5, color: 'white' }}>Logout</Text>
                </TouchableOpacity> 
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 25, 
        borderRadius: 15, 
        elevation: 14,
        shadowOpacity: 0.53,
        shadowRadius: 5,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    listItem: {
        backgroundColor: 'white',
        padding: 30, 
        borderRadius: 15, 
        elevation: 14,
        shadowOpacity: 0.53,
        shadowRadius: 5,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
})

export default Profile
