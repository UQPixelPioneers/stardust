import React from 'react';
import {Image, Text, View} from 'react-native';
import {FC} from "react";
import styles from "@/styles/GlobalSheet";
import styles_home from "@/styles/HomeSheet";

const bottleIcon = '../assets/images/bottleIcon.png';

// Get suffix for date
const getBottleLocation = (): string => {
    return "St Lucia, QLD";
};

const getBottleDistance = (): string => {
    return "0.1km";
};

export const BottleFinder: FC = () => {
    const formattedBottleDetails = `${getBottleLocation()} • ${getBottleDistance()}`;

    return (
        <View style={styles.container}>
            <Image source={require(bottleIcon)} style={styles_home.BottleIcon}/>
            <Text style={styles_home.BottleLabel}>{formattedBottleDetails}</Text>
        </View>
    );
};
