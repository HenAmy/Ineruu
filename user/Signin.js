import React, {useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native'

import Screen from "../components/Screen";

const Signin = ({ navigation }) => {
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
            <TouchableOpacity style={styles.textInput}>
                <TextInput style={styles.h2} label="Phone" value={phone} onChange={handleChange('phone')} placeholder="Phone Number" keyboardType="number-pad"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textInput}>
                <TextInput style={styles.h2} label="Phone" value={password} onChange={handleChange('password')} placeholder="Password" keyboardType="visible-password"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 17, marginLeft:5, color: 'white' }}>Sign In</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.h3}>Already have an account? Sign Up</Text>
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
    h3:{
        fontSize: 15
    },
    inline:{
        flex: 1,
        flexDirection: "row"
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

export default Signin
