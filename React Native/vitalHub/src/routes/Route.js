// Navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Components
import { Navegacao } from "../screens/NavegacaoProvisoria";
import { SplashScreen } from "../screens/SplashScreen";
import { RecoverPassword } from "../screens/Login/RecoverPassword";
import { RedefinePassword } from "../screens/Login/RedefinePassword";
import { CreateAccount } from "../screens/Login/CreateAccount";
import { Login } from "../screens/Login/Login";
import { VerifyEmail } from "../screens/Login/VerifyEmail";
import { Profile } from "../screens/Perfil/Profile";
import { AppointmentUser } from "../screens/Appointment/AppointmentUser";

// Criador de rotas
const Stack = createNativeStackNavigator();

export const Route = () => {
    return (
        // Container - envolve toda a estrutura de nagegação
        //  Navigator - componente para a navegação
        //    Screen - Tela
        //      name: Nome da tela
        //      components: Componente que será chamado
        //      options(title): título da tela

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Navegacao" component={Navegacao} options={{ title: "Navegação Provisória" }} />

                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: "Tela de Splash" }} />

                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />

                <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ title: "Recuperar a senha" }} />

                <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ title: "Verifique seu email" }} />

                <Stack.Screen name="RedefinePassword" component={RedefinePassword} options={{ title: "Redefinir senha" }} />

                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Criar conta" }} />

                <Stack.Screen name="Profile" component={Profile} options={{ title: "Perfil" }} />

                <Stack.Screen name="AppointmentUser" component={AppointmentUser} options={{ title: "Consultas - Paciente" }} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}