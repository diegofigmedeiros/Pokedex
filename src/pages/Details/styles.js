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
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
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
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const Section2Row = styled.SafeAreaView`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 14px;
`;

export const Section2Column1 = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Section2Column2 = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Section2Column2Row1 = styled.SafeAreaView`
  height: 27px;
  width: 100%;
`;

export const Section2Column3 = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Section2Text1 = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  color: #1b1e23;
  width: 100%;
`;

export const Section2Text3 = styled.Text`
  text-align: right;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  color: #1b1e23;
  width: 100%;
`;

export const ShareButtonContainer = styled.SafeAreaView`
  width: 100%;
`;

export const ShareButton = styled.TouchableOpacity`
  margin: 10px;
  background-color: #478070;
  text-align: center;
  border-radius: 50px;
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
