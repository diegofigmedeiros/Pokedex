import styled from 'styled-components/native';
//import Constants from 'expo-constants';

export const ImagePokemonContainer = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ddd;
`;

export const PokemonStatsSection1 = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export const Section1Row = styled.SafeAreaView`
  padding: 14px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Section1Column = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Section1Text = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #1b1e23;
  width: 100%;
`;

export const PokemonStatsSection2 = styled.SafeAreaView`
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Section2Row = styled.SafeAreaView`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 14px;
`;

export const Section2Text = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  color: #1b1e23;
  width: 50%;
`;

export const ShareButtonContainer = styled.SafeAreaView`
  width: 100%;
`;

export const ShareButton = styled.TouchableOpacity`
  margin: 10px;
  background-color: #2629;
  text-align: center;
  border-radius: 8px;
  padding: 16px;
`;

export const ShareButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LargeImage = styled.Image`
  width: 300px;
  height:  300px;
`;
