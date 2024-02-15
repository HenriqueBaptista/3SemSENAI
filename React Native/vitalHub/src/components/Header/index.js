import { StyleSheet } from "react-native";
import { GrayText, Header, HeaderContent, ImageHeader, TextContent, TextUser, UserContent } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderIndex = ({
    image,
    name,
}) => {
    return (
        <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#60BFC5', '#496BBA']}>
            <Header>
                <HeaderContent>
                    <UserContent>
                        <ImageHeader
                            source={image}
                        />

                        <TextContent>
                            <GrayText>Bem vindo</GrayText>

                            <TextUser>{name}</TextUser>

                        </TextContent>

                    </UserContent>

                    <MaterialCommunityIcons name="bell" size={25} color="white" />

                </HeaderContent>

            </Header>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 114,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
})