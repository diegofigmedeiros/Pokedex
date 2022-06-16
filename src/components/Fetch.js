import React from 'react';
import { Text, View, TouchableHighlight, Button } from 'react-native';

export default function Fetch() {
    let [content, setContent] = React.useState('')

    const fetchPokemonApiCall = () => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(response => {
            setContent(response.results);
            console.log(response.results)
        })
        .catch(err => {
          console.log(err);
        });
    }
    return (
      <View >
        <Text >Native API Calls</Text>
        <Text>Example with fetch and Axios</Text>
        <Button title="Pokemons List" onPress={fetchPokemonApiCall}>
          <View >
            <Text >Use Fetch API</Text>
          </View>
        </Button>
        <View>
          {/* <Text>{content}</Text> */}
        </View>
      </View>
    );
  }