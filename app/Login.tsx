import React = require('react');
import { View, Text, ImageBackground, Image, TextInput } from 'react-native'
import styles from '@/styles/GlobalSheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = '../assets/Background-img/Stardust-bg.png';

export const Login = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require(image)}
            style={styles.backgroundImage}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </ImageBackground>
      </View>
    );
}
