import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}


