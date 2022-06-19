import * as React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import { ContainerFluid, Container, ListItem, Item } from '../styles/styles';

import ListImage from './ListImage';
import LoadingScreen from './LoadingScreen';


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
      <LoadingScreen size='large'/>
    )
  }

  return (
    <Container>
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => (
          <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Details', {pokename: item.name, name: item.name } )}
            >
              <ListItem>
                <ListImage name={item.name}/>
                <Text>{item.name}</Text>
              </ListItem>
            </TouchableOpacity>
          </View>
          )}
          />
    </Container>
  )
}
