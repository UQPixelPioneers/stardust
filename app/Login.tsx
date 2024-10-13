import React = require('react');
import { View, Text, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import styles from '@/styles/GlobalSheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const bg_image = '../assets/Background-img/Stardust-bg.png';
const Logo_image = '../assets/images/Stardust_logo.png'

export const Login = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require(bg_image)}
            style={styles.backgroundImage}>
                <Image source={require(Logo_image)}>

                </Image>
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
                        <Text>Login</Text>
                    </View>
                </Pressable>
            </ImageBackground>
      </View>
    );
}
