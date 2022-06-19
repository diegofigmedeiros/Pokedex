import * as React from 'react'  

// React Navigation
// *NavigationContainer is a component which manages our navigation tree and contains the navigation state.
import { NavigationContainer } from '@react-navigation/native';

// *Stack is an Object containing 2 properties: *Screen and *Navigator. 
// Both of them are React components used for configuring the navigator. 
// The Navigator should contain *Screen elements as its children to define the configuration for routes.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Components
import List from './src/pages/Home/List';
import Details from './src/pages/Details/Details';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Pokemons' 
          component={List}/>
        <Stack.Screen name='Details' 
          component={Details} 
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


