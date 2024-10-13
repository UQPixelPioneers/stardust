import {Text, View, Image, ImageSourcePropType,} from "react-native";
import styles_medication from "@/styles/MedicationSheet";
import {FC, Key} from "react";
import styles_home from "@/styles/HomeSheet";
import {StyleProps} from "react-native-reanimated";

interface MedicationEntryProps {
    name: string;
    dosage: number;
    amount: number;
    frequency: string;
    key?: Key;
}

function numToWords(num: number): string {
    switch (num) {
        case 0:
            return "zero";
        case 1:
            return "once";
        case 2:
            return "twice";
        case 3:
            return "thrice";
        default:
            return `${num} times`;
    }
}

const pillIcon = "../assets/images/pillIcon.png";

export const MedicationEntry : FC<MedicationEntryProps> = ({ name, dosage, amount, frequency }) => {
    const pillIconDisplay = require(pillIcon);
    const dosageInformation = `${dosage}mg • ${numToWords(amount)} ${frequency}`;

    return (
        <>
            <Image source={pillIconDisplay} style= {styles_medication.PillIcon}/>
            <Text style= {styles_medication.EntryName}>{name}</Text>
            <Text style= {styles_medication.EntryDosage}>{dosageInformation}</Text>
        </>
    );
}