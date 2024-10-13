import {Text, View, Image, ImageSourcePropType,} from "react-native";
import styles_medication from "@/styles/MedicationSheet";
import {FC, Key} from "react";
import styles_home from "@/styles/HomeSheet";
import {StyleProps} from "react-native-reanimated";

interface MedicationReminderProps {
    name: string;
    status: boolean;
    key: Key;
    style?: StyleProps;
}

const pillIcon = "../assets/images/pillIcon.png";
const statusGoodIcon = "../assets/images/statusGoodIcon.png";
const statusBadIcon = "../assets/images/statusBadIcon.png";

const statusGood = "Taken";
const statusBad = "Due!";

export const MedicationReminder : FC<MedicationReminderProps> = ({ name, status, style }) => {
    const statusText = status ? statusGood : statusBad;
    const pillIconDisplay = require(pillIcon)
    const statusIcon = status ? require(statusGoodIcon) : require(statusBadIcon);

    const mergedStyle = [styles_home.Bubble, style];

    return (
        <View style={mergedStyle}>
        <Text>
            {name}
        </Text>
        <Image source={pillIconDisplay} style= {styles_medication.PillIcon}/>
        <View style={styles_medication.Status}>
            <Image source={statusIcon} style={styles_medication.StatusIcon}/>
            <Text style={styles_medication.StatusText}>{statusText}</Text>
        </View>
    </View>

  );
}