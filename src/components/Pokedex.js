import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react-native';
import { Container, ListItem, Item } from '../styles/styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Pokedex({ route }) {
  const {pokename} = route.params;
  const [pokeStats, setPokeStats] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [pokeImage, setPokeImage] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const fetchPokemon = async (pokename) => {
    try {
      return fetch('https://pokeapi.co/api/v2/pokemon/' + pokename)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon);
        setPokeStats(pokemon.stats)
      });
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  const fetchPokemonImage = async (pokemon) => {
    setPokeImage(`https://raw.githubusercontent.com/PokeAPI/` +
    `sprites/master/sprites/pokemon/other/official-artwork/${JSON.stringify(pokemon.id)}.png`);
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchPokemon(pokename);
    }, 1000);

  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      fetchPokemonImage(pokemon);
    }, 1000);
  }, [pokemon]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pokeImage]);

  //===============================================================

  if (loading) {
    return (
      <View>
        {loading && <ActivityIndicator size={'large'} />}
      </View>
    )
  }

  return (
    <View >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: pokeImage,
        }}
      />
      <ListItem>ID:     {pokemon.id}</ListItem>
      <ListItem>NAME:   {pokemon.name}</ListItem>
      <ListItem>WEIGHT: {pokemon.weight}</ListItem>
      <ListItem>HEIGHT: {pokemon.height}</ListItem>
      <ListItem>{pokeStats[0].stat.name.toUpperCase()} - {pokeStats[0].base_stat} </ListItem>
      <ListItem>{pokeStats[1].stat.name.toUpperCase()} - {pokeStats[1].base_stat} </ListItem>
      <ListItem>{pokeStats[2].stat.name.toUpperCase()} - {pokeStats[2].base_stat} </ListItem>
      
      {/* <FlatList
          data={pokeStats}
          keyExtractor={(item) => item.stat.name}
          renderItem={({item}) => (
            <View>
              <ListItem>
                {item.stat.name} - {item.base_stat}
              </ListItem>
            </View>
          )}
        /> */}
    </View>
  );
}