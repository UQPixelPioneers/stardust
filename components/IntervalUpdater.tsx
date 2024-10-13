import React, { FC, useEffect, useState, ReactNode } from 'react';
import { View } from 'react-native';

interface IntervalUpdaterProps {
    interval: number; // interval for update (ms)
    children: ReactNode;  // children elements to be re-rendered
}

export const IntervalUpdater: FC<IntervalUpdaterProps> = ({ interval, children }) => {
    const node : ReactNode = (<View>{children}</View>);
    const [, forceUpdate] = useState(0);

    // Check for pos number to avoid error
    if (interval > 0) {
        useEffect(() => {
            // Triggers re-render.
            const id = setInterval(() => {
                forceUpdate(prev => (prev + 1) % 2);  // Toggle state between 0 and 1
            }, interval);

            // Cleanup the interval on component unmount or when interval changes
            return () => clearInterval(id);
        }, [interval]);  // Re-run effect if interval prop changes
    } else {
        console.warn("Interval must be a positive number.");
    }
    return node;
};
