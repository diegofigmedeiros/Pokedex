import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Wrapper from './Wrapper';

// Remove this list after the request to the API is complete
const mockList = [
  { name: 'bulbasaur' },
  { name: 'ivysaur' },
  { name: 'venusaur' },
  { name: 'charmander' },
  { name: 'charmeleon' },
  { name: 'charizard' },
  { name: 'squirtle' },
  { name: 'wartortle' },
  { name: 'blastoise' },
  { name: 'caterpie' },
  { name: 'metapod' },
  { name: 'butterfree' },
  { name: 'weedle' },
  { name: 'kakuna' },
  { name: 'beedrill' },
  { name: 'pidgey' },
  { name: 'pidgeotto' },
  { name: 'pidgeot' },
  { name: 'rattata' },
  { name: 'raticate' },
];

export default function List(props) {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setList(mockList);
      setLoading(false);
    }, 2000);
  });

  return (
    <View>
      {loading && <ActivityIndicator size={'large'} />}
      {list.map((i) => {
        return (
          <View style={{ padding: 8 }}>
            <Text>{i.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
