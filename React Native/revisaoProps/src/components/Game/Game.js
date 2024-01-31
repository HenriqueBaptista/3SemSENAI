import { StyleSheet, Text, View } from "react-native"

const Game = ({ title, platform, releaseDate, genre }) => {
    return (
        <View>
            <Text>Título: {title}</Text>
            <Text>Plataforma: {platform}</Text>
            <Text>Data de lançamento: {releaseDate}</Text>
            <Text>Gênero: {genre}</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {

    });

export default Game;