import {Image, Pressable} from "react-native";
import styles from "@/styles/GlobalSheet";
import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
export const BackButton = () => {
    const navigation = useNavigation<any>();

    return (
        <Pressable onPress={() => navigation.pop()}>
            <Image
                style={styles.BackArrow}
                source={require('../assets/images/BackArrow.png')}
            />
        </Pressable>
    )
}