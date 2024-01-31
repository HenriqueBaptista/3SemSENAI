import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // Hook de state
  const [count, setCount] = useState(0)

  // Função para incremento
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decremento
  const decrement = () => {
    setCount(count - 1);
  };

  // Effect para renderização
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Contador: {count}</Text>

      <TouchableOpacity onPress={increment} style={styles.incButton}>
        <Text style={styles.textButton}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.decButton}>
        <Text style={styles.textButton}>Decrementar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    fontSize: 25,
  },

  textButton: {
    fontSize: 15,
  },

  incButton: {
    backgroundColor: '#rgba(0, 255, 0, 1)'
  },

  decButton: {
    backgroundColor: '#rgba(255, 0, 0, 1)'
  }
});
