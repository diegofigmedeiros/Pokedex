import * as React from 'react';
import { View, Text, Button} from 'react-native';

import { Container, Item } from '../styles/styles';

export default function Home({ navigation }) {
  return (
    <Container >
        <Item>Home</Item>
      <Button title="Pokemons List" onPress={() => navigation.navigate('List')} />
    </Container>
  );
}


