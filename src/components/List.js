import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Container, ListItem, Item } from '../styles/styles';


export default function List({ navigation }) {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    let didCancel = false;
  
    async function fetchAPI() {
      let url = 'https://pokeapi.co/api/v2/pokemon';
      const response = await fetch(url);
      if (!didCancel) { 
        let data = await response.json()
        let pokemonlist = data.results
        setList(pokemonlist)
      }
    }
  
    fetchAPI();
  
    return () => { didCancel = true; };
  }, []);

  return (
    <View >
      <Item>Pokemons</Item>
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
  );
}
