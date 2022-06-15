import * as React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

// React Navigation
// *NavigationContainer is a component which manages our navigation tree and contains the navigation state.
import { NavigationContainer } from '@react-navigation/native';

// *Stack is an Object containing 2 properties: *Screen and *Navigator. 
// Both of them are React components used for configuring the navigator. 
// The Navigator should contain *Screen elements as its children to define the configuration for routes.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Components
import Home from './components/Home';
import List from './components/List';
import FlatListBasics from './components/Listinha';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='List' component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


