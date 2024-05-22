//import das fonts
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Quicksand_500Medium,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { Routes } from "./src/routes/Routes";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <Routes />
  );
}
