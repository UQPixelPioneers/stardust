import * as React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from '@/styles/GlobalSheet';
import { useNavigation } from '@react-navigation/native';
import {BounceableImage} from "@/components/BounceableImage";
import styles_home from "@/styles/HomeSheet";

const BgImage = '../assets/backgrounds/whiteBackground.png';
const LogoImage = '../assets/images/stardustLogoColor.png'

export const Startup = () => {
    const navigation = useNavigation<any>();

    return (
        <>
            <ImageBackground
            source={require(BgImage)}
            style={styles.backgroundImage}>
                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <View>
                        <Text>Get started ►</Text>
                    </View>
                </Pressable>
            </ImageBackground>
      </>
    );
};
