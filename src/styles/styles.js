import styled from 'styled-components/native';


//import Constants from 'expo-constants';

// width: ${props => props.small ? "" : "100%"};
// background-color: ${props => props.small ? "#fff" : "#ddd"};

export const ContainerFluid = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ddd;
`;

export const ContainerList = styled.SafeAreaView`
  width: 100%;
  background-color: #fff;
`;

export const ListTitles = styled.SafeAreaView`
  width: 100%;
  background-color: #ddd;
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


export const TinyImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export const LargeImage = styled.Image`
  width: 300px;
  height:  300px;
`;
