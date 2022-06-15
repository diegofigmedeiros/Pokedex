import * as React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { StyledView, StyledText } from '../styles/styles';


export default function Home({ navigation }) {
  return (
    <StyledView >
      <StyledText>
      <Text>Home</Text>
      </StyledText>
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </StyledView>
  );
}


