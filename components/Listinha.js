import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
]

export default function FlatListBasics(props) {
  return (
    <View >
      <FlatList
        data={pokemons}
        renderItem={({item}) => (
          <Text >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}
