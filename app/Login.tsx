// @ts-ignore
import React = require('react');
import { View, Text, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import styles from '@/styles/GlobalSheet';
import styles_login from '@/styles/LoginSheet';
import { useNavigation } from '@react-navigation/native';
import {BounceableImage} from "@/components/BounceableImage";
import styles_home from "@/styles/HomeSheet";

const BgImage = '../assets/Background-img/Stardust-bg.png';
const LogoImage = '../assets/images/stardustLogo.png'

export const Login = () => {
    const navigation = useNavigation<any>();

    const [errorMessage, onErrorMessageUpdate] = React.useState('');

    const onPressFunction = ({username, password}: { username: string, password: string }) => {
        if (!username || !password) {
            // Alert the user if fields are empty
            onErrorMessageUpdate("Error! Please enter a username & password");
            return;
        }
        // Successful Login (Additional verification would be done above.
        navigation.navigate("Home", {screen: "Home"});
    }

    const usernamePlaceholder = "Username";
    const passwordPlaceholder = "Password";
    const [usernameEntry, onChangeUsername] = React.useState('');
    const [passwordEntry, onChangePassword] = React.useState('');

    return (
        <View style={styles.Container}>
            <ImageBackground
            source={require(BgImage)}
            style={styles.backgroundImage}>
                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <TextInput
                    style={styles.input}
                    placeholder={usernamePlaceholder}
                    onChangeText={onChangeUsername}
                    value={usernameEntry}
                />
                <TextInput
                    style={styles.input}
                    placeholder={passwordPlaceholder}
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={passwordEntry}
                />
                <Text style={styles_login.errorText}>{errorMessage}</Text>
                <Pressable onPress={() => onPressFunction({ username: usernameEntry, password: passwordEntry })}>
                    <View>
                        <Text>Login</Text>
                    </View>
                </Pressable>
            </ImageBackground>
      </View>
    );
};
