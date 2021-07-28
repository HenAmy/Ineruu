import React, {useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';

import Screen from "../components/Screen";

const Signup = () => {
    const [values, setValues] = useState({
        username,
        phone,
        password,
    })

    const {username, phone, password} = values

      //Handle changes in textinputs
      const handleChange = (names) => (event) => {
        setValues({ ...values, error: false, [names]: event.nativeEvent.text });
    };

    return (
        <Screen>
            <Text style={styles.h1}>Hello, </Text>
            <Text style={styles.h1}>Sign up to get started</Text>
            <TouchableOpacity style={styles.textInput}>
                <TextInput style={styles.h2} label="Username" value={username} onChange={handleChange('username')} placeholder="Username" keyboardType="default"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textInput}>
                <TextInput style={styles.h2} label="Phone" value={phone} onChange={handleChange('phone')} placeholder="Phone" keyboardType="number-pad"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textInput}>
                <TextInput style={styles.h2} label="Password" value={password} onChange={handleChange('password')} placeholder="Password" keyboardType="visible-password"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 17, marginLeft:5, color: 'white' }}>Sign Up</Text>
            </TouchableOpacity> 
        </Screen>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
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
    h1:{
        fontSize: 30,
        fontWeight: "bold"
    },
    h2:{
        fontSize: 20
    },
    textInput:{
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 15, 
        elevation: 14,
        shadowOpacity: 0.53,
        shadowRadius: 5,
        marginBottom: 15
    },
})

export default Signup
