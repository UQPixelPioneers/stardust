import React = require('react');
import { View, Text, ImageBackground, Image, TextInput, Pressable } from 'react-native'
import styles from '@/styles/GlobalSheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const BgImage = '../assets/Background-img/Stardust-bg.png';
const LogoImage = '../assets/images/Stardust_logo.png'

export const Signup = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require(BgImage)}
            style={styles.backgroundImage}>
                <Image source={require(LogoImage)}>

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
                        <Text>SignUp</Text>
                    </View>
                </Pressable>
            </ImageBackground>
      </View>
    );
}
