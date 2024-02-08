// Fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
import { Route } from "./src/routes/Route";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold,
    Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Route />
  )
};