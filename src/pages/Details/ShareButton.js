
import React from 'react';
import { Share, SafeAreaView } from 'react-native';

import * as Styled from './styles'

export default function ShareButton ( props ) {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Pokemon: ${props.name}\nPeso: ${props.weight}\nAltura: ${props.height}\nHP: ${props.hp}\nAttack${props.attack}\nDefence: ${props.defense}\n`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Styled.ShareButtonContainer>
      <Styled.ShareButton onPress={onShare} >
        <Styled.ShareButtonText>Compartilhar</Styled.ShareButtonText>
      </Styled.ShareButton>
    </Styled.ShareButtonContainer>
  );
};
