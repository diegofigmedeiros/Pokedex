import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Container, ListItem, Item } from '../styles/styles';


export default function Pokedex({ route, navigation }) {
    const [pokemon, setPokemon] = React.useState([]);
    const { pokename } = route.params;

    

    React.useEffect(() => {
      let didCancel = false;
    
      async function fetchAPI() {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokename;
        const response = await fetch(url);
        if (!didCancel) { 
          let data = await response.json()
          let pokemon = data
          setPokemon(pokemon)
        //   console.log(pokemon)
        //   console.log(pokemon.id)
        //   console.log( JSON.stringify(pokemon.id))
        }
      }
    
      fetchAPI();
    
      return () => { didCancel = true; };
    }, []);


    return (
        <View>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png',
              }}
              />
            <ListItem>{pokemon.name}</ListItem>
            <ListItem>{pokemon.weight}</ListItem>
            <ListItem>{pokemon.height}</ListItem>
        </View>
    );
  }