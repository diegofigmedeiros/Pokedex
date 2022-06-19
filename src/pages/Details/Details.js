import * as React from 'react';
import { ScrollView, View, SafeAreaView, Text  } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import * as Styled from './styles'

import LoadingScreen from '../Shared/LoadingScreen';
import ShareButton from './ShareButton';


export default function Details({ route }) {
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
    }
  }

  const fetchPokemonImage = async (pokemon) => {
    setPokeImage(`https://raw.githubusercontent.com/PokeAPI/` +
        `sprites/master/sprites/pokemon/other/official-artwork/${JSON.stringify(pokemon.id)}.png`);
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchPokemon(pokename);
    }, 100);

  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      fetchPokemonImage(pokemon);
    }, 1000);
  }, [pokemon]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // console.log(pokeImage)
    }, 2000);
  }, [pokeImage]);

  //===============================================================

  if (loading) {
    return (
      <LoadingScreen size='large'/>
    )
  }

  return (
      <ScrollView>

        <Styled.ImagePokemonContainer>
          <Styled.LargeImage source={{
              uri: pokeImage,
          }}/>
        </Styled.ImagePokemonContainer>

        <Styled.ImagePokemonContainer>
          <Styled.PokemonStatsSection1>
            <Styled.Section1Row>
              <Styled.Section1Column>
                  <Styled.Section1Text>{pokemon.weight}</Styled.Section1Text>
                  <Styled.Section1Text>WEIGHT</Styled.Section1Text>
              </Styled.Section1Column>
              <Styled.Section1Column>
                  <Styled.Section1Text>{pokemon.height}</Styled.Section1Text>
                  <Styled.Section1Text>HEIGHT</Styled.Section1Text>
              </Styled.Section1Column>
            </Styled.Section1Row>
          </Styled.PokemonStatsSection1>
        </Styled.ImagePokemonContainer>

          <Styled.PokemonStatsSection2>
            <Styled.Section2Row>
              <Styled.Section2Column1>
                <Styled.Section2Text1>{pokeStats[0].stat.name.toUpperCase()}</Styled.Section2Text1>
                <Styled.Section2Text1>{pokeStats[1].stat.name.toUpperCase()}</Styled.Section2Text1>
                <Styled.Section2Text1>{pokeStats[2].stat.name.toUpperCase()}</Styled.Section2Text1>
              </Styled.Section2Column1>
              <Styled.Section2Column2>
                <Styled.Section2Column2Row1>
                  <ProgressBar progress={pokeStats[0].base_stat/100} color={'#478070'} />
                </Styled.Section2Column2Row1>
                  <Styled.Section2Column2Row1>
                  <ProgressBar progress={(pokeStats[1].base_stat/100)} color={'#478070'} />
                  </Styled.Section2Column2Row1>
                  <Styled.Section2Column2Row1>
                  <ProgressBar progress={pokeStats[2].base_stat/100} color={'#478070'} />
                  </Styled.Section2Column2Row1>
              </Styled.Section2Column2>
              <Styled.Section2Column3>
                <Styled.Section2Text3>{pokeStats[0].base_stat}</Styled.Section2Text3>
                <Styled.Section2Text3>{pokeStats[1].base_stat}</Styled.Section2Text3>
                <Styled.Section2Text3>{pokeStats[2].base_stat}</Styled.Section2Text3>
              </Styled.Section2Column3>
            </Styled.Section2Row>
            <Styled.Section2Row>
              <ShareButton
                name=   {pokemon.name}
                weight= {pokemon.weight}
                height= {pokemon.height}
                hp=     {pokeStats[0].base_stat}
                attack= {pokeStats[1].base_stat}
                defense={pokeStats[2].base_stat}
                />
            </Styled.Section2Row>
          </Styled.PokemonStatsSection2>

      </ScrollView>
  );
}