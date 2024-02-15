import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="SplashScreen"
                onPress={() => navigation.navigate("SplashScreen")}
            />

            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="RecoverPassword"
                onPress={() => navigation.navigate("RecoverPassword")}
            />

            <Button
                title="VerifyEmail"
                onPress={() => navigation.navigate("VerifyEmail")}
            />

            <Button
                title="RedefinePassword"
                onPress={() => navigation.navigate("RedefinePassword")}
            />

            <Button
                title="CreateAccount"
                onPress={() => navigation.navigate("CreateAccount")}
            />

            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />

            <Button
            title="AppointmentUser"
            onPress={() => navigation.navigate("AppointmentUser")} />

        </View>

    );

};