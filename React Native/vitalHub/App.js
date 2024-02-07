import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { SplashScreen } from "./src/screens/SplashScreen";
import { Login } from "./src/screens/Login/Login";

// Fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    // Container - envolve toda a estrutura de nagegação
    //  Navigator - componente para a navegação
    //    Screen - Tela
    //      name: Nome da tela
    //      components: Componente que será chamado
    //      options(title): título da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navegacao" component={Navegacao} options={{ title: "Navegação" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: "Tela de Splash" }} />

      </Stack.Navigator>

    </NavigationContainer>

  )
};