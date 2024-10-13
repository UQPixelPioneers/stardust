import {Image, Pressable} from "react-native";
import styles from "@/styles/GlobalSheet";
import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
export const AddButton = () => {
    const navigation = useNavigation<any>();

    return (
        <Pressable>
            <Image source={require("../assets/images/AddButton.png")} style={styles.AddButton} >

            </Image>
        </Pressable>
    )
}