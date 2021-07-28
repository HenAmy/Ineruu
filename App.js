import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Profile from "./user/Profile";
import Sell from "./core/Sell";
import Categories from './core/Categories';

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
          <Stack.Screen name="Signup" component={Signup} options={{
              headerTitle: "ineruu",
              headerStyle: {
                backgroundColor: 'blue'
              },
              headerTitleStyle: {
                color: 'white'
              },
              headerTintColor: "white"
          }}/> 
        <Stack.Screen name="Categories" component={Categories} options={{
            headerTitle: "ineruu",
            headerStyle: {
              backgroundColor:'blue',
            },
            headerTintColor: "white"
          }}/>
        <Stack.Screen name="Sell" component={Sell} options={{
            headerTitle: "ineruu",
            headerStyle: {
              backgroundColor:'blue',
            },
            headerTintColor: "white"
          }}/>
          <Stack.Screen name="Profile" component={Profile} options={{
            headerTitle: "ineruu",
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: "white"
          }}/>
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
