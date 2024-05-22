import { NavigationContainer } from "@react-navigation/native";
import { Navegacao } from "../screens/Navegacao/Navegacao";
import { Login } from "../screens/Login/Login";
import { Home } from "../screens/Home/Home";
import { CriarConta } from "../screens/CriarConta/CriarConta";
import { RedefinirSenha } from "../screens/RedefinirSenha/RedefinirSenha";
import { VerifiqueSeuEmail } from "../screens/VerifiqueSeuEmail/VerifiqueSeuEmail";
import { RecuperarSenha } from "../screens/RecuperarSenha/RecuperarSenha";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePaciente } from "../screens/HomePaciente/HomePaciente";
import { Main } from "../screens/Main/Main"
import { ProntuarioPaciente } from "../screens/ProntuarioPaciente/ProntuarioPaciente";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

// retorna as rotas
export const Routes = () => {
    return (
        // envolve a estrutura da navegação
        <NavigationContainer>

            {/* componente para navegação */}
            <Stack.Navigator>

                <Stack.Screen
                    // nome da tela
                    name="Login"
                    //componente que será chamado
                    component={Login}
                    //título da tela
                    options={{ title: "Login" }}
                />

                <Stack.Screen
                    name="Main"
                    component={Main}
                />

                {/* tela
                <Stack.Screen
                    // nome da tela
                    name="Navegacao"
                    //componente que será chamado
                    component={Navegacao}
                    //título da tela
                    options={{ title: "Navegação" }}
                /> */}

                <Stack.Screen
                    name="Recuperar Senha"
                    component={RecuperarSenha}
                    options={{ title: "Recuperar senha" }}
                />

                <Stack.Screen
                    name="Verifique seu e-mail"
                    component={VerifiqueSeuEmail}
                    options={{ title: "Verifique seu e-mail" }}
                />

                <Stack.Screen
                    name="Redefinir Senha"
                    component={RedefinirSenha}
                    options={{ title: "Redefinir senha" }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={CriarConta}
                    options={{ title: "Criar conta" }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />

                <Stack.Screen
                    name="Home Paciente"
                    component={HomePaciente}
                    options={{ title: "Home Paciente" }}
                />

                <Stack.Screen
                    name="Prontuario Paciente"
                    component={ProntuarioPaciente}
                    options={{ title: "Prontuario Paciente" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}