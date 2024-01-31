import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native';
import Person from './src/components/Person/Person';
import Game from './src/components/Game/Game';

// import das fontes
import { useFonts } from 'expo-font';
import { Poppins_300Light } from '@expo-google-fonts/poppins';
import { Inter_400Regular } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light, Inter_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: '1', name: 'Conio', age: 17 },
    { id: '2', name: 'Lori', age: 10 },
    { id: '3', name: 'Creepo', age: 17 },
  ];

  const gameList = [
    {id: '1', title: 'Uncharted 4', platform: 'Playstation 4', releaseDate: '10/05/2016', genre: 'Ação'},
    {id: '2', title: 'Forza Horizon 2', platform: 'XBOX One', releaseDate: '27/09/2016', genre: 'Corrida'},
    {id: '3', title: 'Poppy Playtime', platform: 'PC', releaseDate: '12/10/2021', genre: 'Terror'},
  ]

  return (
    <SafeAreaView>
      <StatusBar />

      <Text>Pessoas</Text>
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Person name={item.name} age={item.age} />
        )}
      />

      <Text>Jogos</Text>
      <FlatList
      data={gameList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Game title={item.title} />
      )} />

    </SafeAreaView>
  );
};