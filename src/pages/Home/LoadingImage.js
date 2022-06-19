
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles'


export default function LoadingImage( props ) {

  return (
    <Styled.SmallLoadingContainer>
        <ActivityIndicator size={props.size} />
    </Styled.SmallLoadingContainer>
  )
}