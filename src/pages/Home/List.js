import * as React from 'react';
import { FlatList, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import * as Styled from './styles'


import ListImage from './ListImage';
import LoadingScreen from '../Shared/LoadingScreen';


export default function List({ navigation }) {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  const fetchAPI = async () => {
    try {
      return fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((pokemonlist) => {
        setList(pokemonlist.results);
      });
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      fetchAPI();
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <LoadingScreen size='large'/>
    )
  }

  return (
    <SafeAreaView>
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => (

            <SafeAreaView>
              <Styled.ListButton 
              onPress={() => navigation.navigate('Details', {pokename: item.name, name: item.name } )}
              >
                <Styled.ListRow>
                  <Styled.ListColumnImage>
                    <View>
                      <ListImage name={item.name}/>
                    </View>
                  </Styled.ListColumnImage>
                  <Styled.ListColumnText>
                    <View>
                    <Styled.ListText>{item.name}</Styled.ListText>
                    </View>
                  </Styled.ListColumnText>
                </Styled.ListRow>
              </Styled.ListButton>
            </SafeAreaView>

          )}
          />
    </SafeAreaView>
  )
}
