import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

import Screen from "../components/Screen";

const Sell = () => {
    const [image, setImage] = useState(null);
    const [item, setItem] = useState();

    useEffect(() => {
        // (async () => {
        //   if (Platform.OS !== 'web') {
        //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //     if (status !== 'granted') {
        //       alert('Sorry, we need camera roll permissions to make this work!');
        //     }
        //   }
        // })();
      }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    return (
        <Screen>
            <Text style={styles.h1}>Add an items</Text>
            <ScrollView>
                <TextInput style={{ marginBottom: 20 }} label="Name" keyboardType="default"/>
                {/* <TextInput style={styles.textInput} label="Category"/> */}
                <Picker
                style={{
                    padding: 30,
                    marginBottom: 10
                }}
                selectedValue={item}
                onValueChange={(itemValue, itemIndex) =>
                    setItem(itemValue)
                }>
                    <Picker.Item label="Fashion" value="fashion" />
                    <Picker.Item label="Tech" value="tech" />
                    <Picker.Item label="Medicine" value="medicine" />
                    <Picker.Item label="Vehicles" value="vehicles" />
                    <Picker.Item label="Jobs" value="jobs" />
                </Picker>

                <TextInput style={{ marginBottom: 20 }} label="Price" keyboardType="number-pad"/>
                <TextInput style={{ marginBottom: 20 }} label="Description" multiline numberOfLines={4} keyboardType="default"/>
                <Button color="blue" icon="camera" mode="contained" onPress={pickImage}>Choose Image</Button>
                <View style={{ flex: 1, justifyContent: "center", flexDirection: 'row', padding: 10 }}>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, }} />}
                </View>
                        
                <View style={{ flex: 1, flexDirection: 'row', alignContent: "flex-end"}}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log("Saved")}>
                    <Text style={{ fontSize: 17, marginLeft:5, color: 'white' }}>Add Item</Text>
                    </TouchableOpacity> 
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 20, 
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
    h1: {
        fontSize: 30,
        marginBottom: 10
    },
    textInput: {
        marginBottom: 20
        // fontSize: 20,
        // width: "100%"
    },
    textInput: {
        backgroundColor: 'white',
        // padding: 30, 
        // borderRadius: 15, 
        // elevation: 14,
        // shadowOpacity: 0.53,
        // shadowRadius: 5,
        // flex: 1,
        // flexDirection: "row",
        // alignItems: "center",
        // marginBottom: 15
    },
})

export default Sell

