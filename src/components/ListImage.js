import * as React from 'react';
import { View } from 'react-native';
import { TinyImage, Container, ContainerFluid } from '../styles/styles';

import LoadingScreen from './LoadingScreen';


export default function ListImage( props ) {
  const [pokemon, setPokemon] = React.useState([]);
  const [pokeImage, setPokeImage] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const fetchPokemon = async (pokename) => {
    try {
      return fetch('https://pokeapi.co/api/v2/pokemon/' + pokename)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon);
      });
    } catch (error) {
      console.error(error);
    }

  }

  const fetchPokemonImage = async (pokemon) => {
    setPokeImage(`https://raw.githubusercontent.com/PokeAPI/` +
    `sprites/master/sprites/pokemon/other/official-artwork/${JSON.stringify(pokemon.id)}.png`);
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchPokemon(props.name);
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
        <LoadingScreen size='small'/>
    )
  }

  return (
    <View>
      <TinyImage
        source={{
            uri: pokeImage,
        }}
        />
    </View>
  );
}