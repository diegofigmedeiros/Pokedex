
import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { ContainerFluid } from '../styles/styles';


export default function LoadingScreen( props ) {

  return (
    <ContainerFluid>
        <ActivityIndicator size={props.size} />
    </ContainerFluid>
  )
}