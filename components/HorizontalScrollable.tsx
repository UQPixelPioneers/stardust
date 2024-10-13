import React, {FC} from 'react';
import { ScrollView} from 'react-native';
import {StyleProps} from "react-native-reanimated";

function divideElements(value: number, elements : number) {
    if (elements <= 0) {
        throw new Error("Element count must be > 0");
    }
    return Math.floor(value / elements);
}

interface HorizontalScrollableProps {
    elemNum : number;
    style: StyleProps;
    styleContainer: StyleProps;
    children: React.ReactNode;
}

export const HorizontalScrollable : FC<HorizontalScrollableProps> = ({ elemNum, style, styleContainer, children }) => {

    const [itemWidth, setItemWidth] = React.useState<number>(0);
    const [scrollableWidth, setScrollableWidth] = React.useState<number>(0);

    const updateLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setScrollableWidth(width);
    };

    React.useEffect(() => {
        if (scrollableWidth > 0 && elemNum > 0) {
            setItemWidth(divideElements(scrollableWidth, elemNum));
        }
    }, [scrollableWidth]); // Triggers when scrollableWidth changes

    return (
        <ScrollView
            onLayout={updateLayout}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={itemWidth} // Set the interval for snapping (width of units for smooth snapping)
            decelerationRate="fast"
            contentContainerStyle={styleContainer}
            style={style}
        >
            {React.Children.map(children, (child) => {
                // Check if child is a valid React JSX
                if (React.isValidElement(child)) {
                    const { style, ...otherProps } = child.props;

                    // Merge styles and set width
                    const mergedStyle = [style, { width: itemWidth }];
                    //console.log(mergedStyle)
                    return React.cloneElement(child, { ...otherProps, style: mergedStyle });
                }
                return null;
            })}
        </ScrollView>
    );
};