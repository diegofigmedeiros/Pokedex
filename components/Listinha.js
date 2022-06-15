import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';



export default function FlatListBasics(props) {
  return (
    <View >
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'Johsn'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'}, 
        ]}
        renderItem={({item}) => (
          <Text >
            {item.key}
          </Text>
        )}
      />
    </View>
  );
}
