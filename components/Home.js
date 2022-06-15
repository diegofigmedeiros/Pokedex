import * as React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { Container, Title } from '../styles/styles';


export default function Home({ navigation }) {
  return (
    <Container >
        <Title>Home</Title>
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </Container>
  );
}


