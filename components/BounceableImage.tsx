import React, {FC, useRef} from 'react';
import { Animated, ImageSourcePropType, ImageStyle, StyleProp, Pressable } from 'react-native';

interface BounceableImageProps {
    source: ImageSourcePropType;
    style?: StyleProp<ImageStyle>;
    max_scale: number;
    duration: number;
}

export const BounceableImage: FC<BounceableImageProps> = ({ source, style, max_scale = 1.2, duration = 400 }) => {
    // References are used to track changes on DOM synchronously as useState is async and causes timing issues.
    const bounceAnim = useRef(new Animated.Value(1)).current;
    const isAnimating = useRef(false);
    const isRepeating = useRef(false);

    const animate = (press: boolean): void => {
        if (isAnimating.current && press) {
            // If already animating and a press happens, mark repeat
            isRepeating.current = true;
            return;
        }

        // Mark animation as started
        isAnimating.current = true;

        // Animate image
        Animated.sequence([
            Animated.timing(bounceAnim, {
                toValue: max_scale,
                duration: duration / 2, // Scaling up
                useNativeDriver: true,
            }),
            Animated.timing(bounceAnim, {
                toValue: 1, // Scale back to original size
                duration: duration / 2, // Scaling down
                useNativeDriver: true,
            }),
        ]).start(() => {
            isAnimating.current = false;

            // Check if repeat is required
            if (isRepeating.current) {
                isRepeating.current = false;
                animate(false);
            }
        });
    };

    return (
        <Animated.View>
            <Pressable onPress={() => animate(true)}>
                <Animated.Image
                    source={source}
                    style={[style, { transform: [{ scale: bounceAnim }] }]}
                />
            </Pressable>
        </Animated.View>
    );
};
