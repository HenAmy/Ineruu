import React, {useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native'

import Screen from "../components/Screen";

const Signin = () => {
    const [values, setValues] = useState({
        phone,
        password
    })

    //Destructure values state
    const {phone, password} = values;

    //Handle changes in textinputs
    const handleChange = (names) => (event) => {
        setValues({ ...values, error: false, [names]: event.nativeEvent.text });
    };

    return (
        <Screen>
            <Text style={styles.h1}>Hello Again, </Text>
            <Text style={styles.h1}>Welcome back!</Text>
            <TouchableOpacity style={styles.listItem}>
                <TextInput style={styles.textInput} label="Phone" value={phone} onChange={handleChange('phone')} placeholder="Phone Number" keyboardType="number-pad"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
                <TextInput style={styles.textInput} label="Phone" value={password} onChange={handleChange('password')} placeholder="Password" keyboardType="visible-password"/>
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontSize: 30,
        fontWeight: "bold"
    },
    listItem:{
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 15, 
        elevation: 14,
        shadowOpacity: 0.53,
        shadowRadius: 5,
        marginBottom: 15
    },
    textInput:{
        fontSize: 20
    }
})

export default Signin
