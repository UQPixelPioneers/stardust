import React, {FC, useRef} from 'react';
import {View, Animated, TouchableWithoutFeedback, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface BounceableImageProps {
    source: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
    max_scale: number;
    duration: number;
}

export const BounceableImage: FC<BounceableImageProps> = ({ source, style, max_scale = 1.2, duration = 500 }) => {
    const bounceAnim = useRef(new Animated.Value(1)).current; // Initial scale value

    const handlePress = () => {
        // Animate image
        Animated.sequence([
            Animated.timing(bounceAnim, {
                toValue: max_scale,
                duration: duration / 2, // scaling up
                useNativeDriver: true,
            }),
            Animated.timing(bounceAnim, {
                toValue: 1, // Scale back to original size
                duration: duration / 2, // scaling down
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View>
            <TouchableWithoutFeedback onPress={handlePress}>
                <Animated.Image
                    source={source}
                    style={[style, { transform: [{ scale: bounceAnim }] }]} // Apply scale transform
                />
            </TouchableWithoutFeedback>
        </View>
    );
};
