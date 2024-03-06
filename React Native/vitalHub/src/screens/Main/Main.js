import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Importando as telas
import { Home } from "../Home/Home";
import { PerfilPaciente } from "../PerfilPaciente/PerfilPaciente"

// Importando elementos do Style
import { ContentIcon, TextIcon } from "./Style";

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Navegacao } from "../Navegacao/Navegacao";
import { HomePaciente } from "../HomePaciente/HomePaciente";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home Paciente"

            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 80,
                    paddingTop: 10
                },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={20} color="#4E4B59" />
                                {focused && <TextIcon>Usuário</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >

            <BottomTab.Screen
                name="Home Paciente"
                component={HomePaciente}
            />

            <BottomTab.Screen
                name="Perfil"
                component={PerfilPaciente}
            />

        </BottomTab.Navigator>
    )
}