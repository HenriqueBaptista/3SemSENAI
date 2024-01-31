const { View, Text, StyleSheet } = require("react-native");

const Person = ({name, age}) => {
    return(
        <View style={styles.container}> 
            <Text style={styles.textPoppins}>Nome: {name}</Text>
            <Text style={styles.textInter}>Idade: {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    textPoppins: {
        fontFamily: 'Poppins_300Light',
    },

    textInter: {
        fontFamily: 'Inter_400Regular',
    }
});

export default Person;