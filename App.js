import * as React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import List from './components/List';
import FlatListBasics from './components/Listinha';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <FlatListBasics/>
    </SafeAreaView>
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
