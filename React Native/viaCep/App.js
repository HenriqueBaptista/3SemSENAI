import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <ContainerApp>
      <StatusBar 
      backgroundColor='transparent'
      translucent/>

      {/* HEADER */}
      <Header />

      {/* HOMESCREEN */}

    </ContainerApp>
  );
}