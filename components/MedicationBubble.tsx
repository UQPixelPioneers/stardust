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
            return "Zero";
        case 1:
            return "Once";
        case 2:
            return "Twice";
        case 3:
            return "Thrice";
        default:
            return `${num} Times`;
    }
}

const pillIcon = "../assets/images/pillIcon.png";

export const MedicationBubble : FC<MedicationEntryProps> = ({ name, dosage, amount, frequency }) => {
    const pillIconDisplay = require(pillIcon);
    const dosageInformation = `${dosage}mg • ${numToWords(amount)} ${frequency}`;

    return (
        <View style={styles_medication.EntryCard}>
            <Image source={pillIconDisplay} style= {styles_medication.PillIcon}/>
            <Text style= {styles_medication.EntryName}>{name}</Text>
            <Text style= {styles_medication.EntryDosage}>{dosageInformation}</Text>
        </View>
    );
}