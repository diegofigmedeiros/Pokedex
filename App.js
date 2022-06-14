import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import List from './components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
  // <View>
  //   <Text>
  //     Say Hello to my little friend
  //   </Text>
  // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jooj" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
