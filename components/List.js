import * as React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import StyledView from '../styles/styles';

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

export default function List({ }) {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setList(mockList);

      setLoading(false);
    }, 2000);
  });

  return (
    <StyledView>
      {loading && <ActivityIndicator size={'large'} />}
      {list.map((i) => {
        return (
          <View>
            <Text>{i.name}</Text>
          </View>
        );
      })}
    </StyledView>
  );
}
