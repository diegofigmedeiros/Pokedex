import styled from 'styled-components/native';
//import Constants from 'expo-constants';

export const ListRow = styled.SafeAreaView`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListColumnImage = styled.SafeAreaView`
  width: 60px;
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
  font-size:28px;
  line-height: 48px;
`;

export const SmallLoadingContainer = styled.SafeAreaView`
  width: 50px;
  height: 50px;
`;

export const TinyImage = styled.Image`
  width: 50px;
  height: 50px;
`;

