import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundImage = require('./src/assets/images/juan.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 75, 0, 0.7)', 'rgba(0, 0, 0, 0.10) 100%)']}
        start={{ x: -0.5, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.backgroundGlass}
      >

        <Image source={BackgroundImage} style={styles.image} />

        <View style={styles.viewInputs}>
          <Text style={styles.text}>Email</Text>

          <LinearGradient
            colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.0) 100%)']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.inputGlass}
          >
            <TextInput
              style={styles.input}
              defaultValue='Digite seu email' />
          </LinearGradient>

          <Text style={styles.text}>Senha</Text>

          <LinearGradient
            colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.0) 100%)']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.inputGlass}
          >
            <TextInput
              style={styles.input}
              defaultValue='Digite sua senha' />
          </LinearGradient>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundGlass: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    gap: 65,
  },

  inputGlass: {
    width: '90%',
    height: 40,

    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },

  viewInputs: {
    width: '100%',
    height: 110,
    gap: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#233073',

    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 15,

    position: 'relative',
    left: '-35%',
    bottom: '-10%',
  },

  input: {
    color: '#fff',
  },

  image: {
    width: 150,
    height: 150,

    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
  },

  button: {
    width: '40%',
    height: 40,

    borderRadius: 10,

    backgroundColor: 'rgba(220, 70, 50, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#fff',
    textTransform: 'capitalize'
  },
});
