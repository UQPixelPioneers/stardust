import React from 'react';
import { Text, View } from 'react-native';
import {FC} from "react";
import styles from "@/styles/GlobalSheet";

// Get suffix for date
const getDateSuffix = (date: number): string => {
    // Arrow function to check lastDigit base case.
    const lastDigit = (date: number): string => {
        switch (date % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    return date % 100 >= 11 && date % 100 <= 13 ? "th" : lastDigit(date)
};

export const FormattedDate: FC = () => {
    // Get current Date
    const currentDate = new Date();

    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    const date = currentDate.getDate();
    const dateWithSuffix = `${date}${getDateSuffix(date)}`;

    const formattedDate = `${weekday}, ${month} ${dateWithSuffix}`;

    return (
        <>
            <Text style={styles.Date}>{formattedDate}</Text>
        </>
    );
};
