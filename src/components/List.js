import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Container, ListItem, Item } from '../styles/styles';


const pokemons =[
  { name: 'bulbasaur'  },
  { name: 'ivysaur'    },
  { name: 'venusaur'   },
  { name: 'charmander' },
  { name: 'charmeleon' },
  { name: 'charizard'  },
  { name: 'squirtle'   },
  { name: 'wartortle'  },
  { name: 'blastoise'  },
  { name: 'caterpie'   },
  { name: 'metapod'    },
  { name: 'butterfree' },
  { name: 'weedle'     },
  { name: 'kakuna'     },
  { name: 'beedrill'   },
  { name: 'pidgey'     },
  { name: 'pidgeotto'  },
  { name: 'pidgeot'    },
  { name: 'rattata'    },
  { name: 'raticate'   },
  { name: 'aaa'     },
  { name: 'bbb'     },
  { name: 'ccc'   },
  { name: 'ddd'     },
  { name: 'eee'  },
  { name: 'fff'    },
  { name: 'ggg'    },
  { name: 'jjj'   }, 
  { name: 'aaa'     },
  { name: 'bbb'     },
  { name: 'ccc'   },
  { name: 'ddd'     },
  { name: 'eee'  },
  { name: 'fff'    },
  { name: 'ggg'    },
  { name: 'jjj'   }, 
]


export default function List({ navigation }) {
  return (
    <View >
      <Item>Pokemons</Item>
      <Button title="Fetch" onPress={() => navigation.navigate('Fetch')} />
      <FlatList
        data={pokemons}
        keyExtractor={pokemons.name}
        renderItem={({item}) => (
          <View>
            <ListItem>{item.name}</ListItem>
          </View>
        )}
      />
    </View>
  );
}
