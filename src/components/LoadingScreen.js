
import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from '../styles/styles';


export default function LoadingScreen( props ) {

  return (
    <Container>
        <ActivityIndicator size={props.size} />
    </Container>
  )
}