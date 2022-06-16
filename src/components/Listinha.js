import * as React from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';


// Remove this list after the request to the API is complete
const mockList = [
  { name: 'mockbulbasaur' },
  { name: 'mockivysaur' },
  { name: 'mockvenusaur' },
  { name: 'mockcharmander' },
  { name: 'mockcharmeleon' },
  { name: 'mockcharizard' },
  { name: 'mocksquirtle' },
  { name: 'mockwartortle' },
  { name: 'mockblastoise' },
  { name: 'mockcaterpie' },
  { name: 'mockmetapod' },
  { name: 'mockbutterfree' },
  { name: 'mockweedle' },
  { name: 'mockkakuna' },
  { name: 'mockbeedrill' },
  { name: 'mockpidgey' },
  { name: 'mockpidgeotto' },
  { name: 'mockpidgeot' },
  { name: 'mockrattata' },
  { name: 'mockraticate' },
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
    <View>
      {loading && <ActivityIndicator size={'large'} />}
      {list.map((i) => {
        return (
          <View>
            <Text>{i.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
