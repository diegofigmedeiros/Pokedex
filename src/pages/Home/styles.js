import styled from 'styled-components/native';
//import Constants from 'expo-constants';

export const ListRow = styled.SafeAreaView`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center
`;

export const ListColumnImage = styled.SafeAreaView`
  align-items: center;
  width: 70px;
`;

export const ListColumnText = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const ListButton = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid lightgray;
`;
export const ListText = styled.Text`
  color: #1b1e23;
  font-size: 24px;
`;

export const SmallLoadingContainer = styled.SafeAreaView`
  align-items: center;
`;

export const TinyImage = styled.Image`
  width: 50px;
  height: 50px;
`;

