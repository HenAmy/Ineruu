import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} options={{
              headerTitle: "ineruu",
              headerStyle: {
                backgroundColor: 'blue'
              },
              headerTitleStyle: {
                color: 'white'
              }
            }}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
