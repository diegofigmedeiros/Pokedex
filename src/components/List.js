import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Container, ListItem, Item } from '../styles/styles';

//import { fetchAPI } from '../services/fetchpokemonlist';

export default function List({ navigation }) {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  const fetchAPI = async () => {
    try {
      return fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((json) => {
        setList(json.results);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchAPI()
    }, 2000);
  }, []);


  return (
    <View>
      <Item>Pokemons</Item>
      {loading && <ActivityIndicator size={'large'} />}
      {
      <View >
        <FlatList
          data={list}
          keyExtractor={list.name}
          renderItem={({item}) => (
            <View>
              <Button title={item.name} onPress={() => navigation.navigate('Pokedex', {
                  pokename: item.name
                }
                )} />
              <ListItem>{item.name}</ListItem>
            </View>
          )}
        />
      </View>
      }
    </View>
  )
}
