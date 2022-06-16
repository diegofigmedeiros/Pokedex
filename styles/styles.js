import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
`;

export const Item = styled.Text`
  color: #000;
  font-size: 24px;
  padding: 24px;
`;

export const ListItem = styled(Item)`
  color: black;
  background-color: #fff;
  font-size: 16px;
  width: 100%;
`;
