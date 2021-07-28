import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";

import Screen from "../components/Screen";

const category =[
    {
        id: 1,
        icon: "call",
        title: "Technology"
    },
    {
        id: 2,
        icon: "briefcase",
        title: "Jobs"
    },
    {
        id: 3,
        icon: "walk",
        title: "Fashion"
    },
    {
        id: 4,
        icon: "medkit",
        title: "Medicine"
    },
    {
        id: 5,
        icon: "car",
        title: "Vehicles"
    },
    {
        id: 6,
        icon: "home",
        title: "Animals"
    },
    {
        id: 7,
        icon: "pizza",
        title: "Food"
    },
    {
        id: 8,
        icon: "ice-cream",
        title: "Pets"
    },
    {
        id: 9,
        icon: "cart",
        title: "Other"
    },
]

const Categories = () => {
    return (
        <>
            <Text style={styles.h1}>All Categories</Text>
            <ScrollView style={{ padding: 10 }}>
                    {/* <Icon name="pencil-sharp" size={20}/>
                    <Text style={{ fontSize: 17, marginLeft:5 }}>Technology</Text> */}
                    {category.map((cat, index) => {
                        return (
                            // <Card key={index} product={product}/>
                            <List.Item title={cat.title} left={() => <Icon name={cat.icon} size={36}/>} titleStyle={{ fontSize: 20 }} style={styles.list}/>
                            )
                        })}
                    {/* <List.Item title="Fashion" left={() => <List.Icon icon="folder"/>} titleStyle={{ fontSize: 20 }}/> */}
            </ScrollView>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    listItem: {
        backgroundColor: 'white',
        padding: 25, 
        borderRadius: 15, 
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    list: {
        backgroundColor: 'white',
        padding: 10, 
        borderRadius: 15, 
        borderWidth: 1,
        // flex: 1,
        // flexDirection: "row",
        // alignItems: "center",
        marginBottom: 15
    },
})
