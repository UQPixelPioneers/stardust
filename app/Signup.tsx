import * as React from 'react';
import { View, Text, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import styles from '@/styles/GlobalSheet';
import styles_login from "@/styles/LoginSheet";
import {BounceableImage} from "@/components/BounceableImage";
import styles_home from "@/styles/HomeSheet";

const BgImage = '../assets/Background-img/mainBackground.png';
const LogoImage = '../assets/images/stardustLogo.png'

export const Signup = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.Container}>
            <ImageBackground
            source={require(BgImage)}
            style={styles.backgroundImage}>
                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Pressable>
                    <View>
                        <Text>SignUp</Text>
                    </View>
                </Pressable>
            </ImageBackground>
      </View>
    );
}
