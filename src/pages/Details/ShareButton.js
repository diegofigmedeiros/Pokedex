
import React from 'react';
import { Share, View, Button } from 'react-native';

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
    <View >
      <Button onPress={onShare} title="Share" />
    </View>
  );
};
