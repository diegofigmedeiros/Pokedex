import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Container, ListItem, Item } from '../styles/styles';
import ListImage from './ListImage';


export default function List({ navigation }) {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  const fetchAPI = async () => {
    try {
      return fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((pokemonlist) => {
        setList(pokemonlist.results);
      });
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchAPI();
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View>
        {loading && <ActivityIndicator size={'large'} />}
      </View>
    )
  }

  return (
    <View>
      <Item>Pokemons</Item>
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => (
            <View>
            <TouchableOpacity 
              // style={styles.button} 
              onPress={() => navigation.navigate('Pokedex', {pokename: item.name})}
            >
              <ListItem>
                <ListImage name={item.name}/>
                <Text>{item.name}</Text>
              </ListItem>

            </TouchableOpacity>
            </View>
          )}
        />
      </View>
  )
}
