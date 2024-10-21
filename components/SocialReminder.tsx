import {Text, View, Image, ImageSourcePropType,} from "react-native";
import {FC, Key} from "react";
import styles_home from "@/styles/HomeSheet";
import {StyleProps} from "react-native-reanimated";

interface SocialReminderProps {
    avatar?: ImageSourcePropType;
    streak?: number;
    key?: Key;
    style?: StyleProps;
}

const bellIcon = "../assets/images/notification_bell.png";
const avatarIcon = "../assets/images/avatarIcon.png";
const fireIcon = "../assets/images/fireIcon.png";

export const SocialReminder : FC<SocialReminderProps> = ({ avatar, streak, style }) => {
    const avatarIconDisplay = avatar ? avatar : require(avatarIcon);
    const fireIconDisplay = require(fireIcon);
    //const bellIconDisplay = require(bellIcon);

    const mergedStyle = [styles_home.Bubble, style];

    return (
      <View style={mergedStyle}>
        {/* <Image source={bellIconDisplay} style={styles_social.BellIcon} /> */}
        <Image source={avatarIconDisplay} style={styles_home.AvatarIcon} />

        <View style={styles_home.StatusFren}>
          <Image source={fireIconDisplay} style={styles_home.FireIcon} />
          <Text style={styles_home.Streak}>{streak}</Text>
        </View>
      </View>
    );
}