import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { BtnInc, BtnDec } from './src/components/Button/Button';

export default function App() {
  // Hook de state
  const [count, setCount] = useState(0)

  // Função para incremento
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decremento
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      Alert.alert("O contador não conta numeros negativos!")
    }
  };

  // Effect para renderização
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count]);

  return (
    <Container>
      <Title>Contador: {count}</Title>

      <BtnInc onPress={increment}>
        <Text style={styles.textButton}>Incrementar</Text>
      </BtnInc>

      <BtnDec onPress={decrement}>
        <Text style={styles.textButton}>Decrementar</Text>
      </BtnDec>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 15,
  },
});
