import {Text, View, Image, ImageSourcePropType,} from "react-native";
import {FC, Key} from "react";
import styles_home from "@/styles/HomeSheet";
import styles_social from "@/styles/SocialSheet";
import {StyleProps} from "react-native-reanimated";

interface SocialReminderProps {
    avatar?: ImageSourcePropType;
    streak?: number;
    key?: Key;
    style?: StyleProps;
}

const bellIcon = "../assets/images/notification_bell.png";
const avatarIcon = "../assets/images/avatarIcon.png";
const fireIcon = "../assets/images/manageIcon.png";

export const SocialReminder : FC<SocialReminderProps> = ({ avatar, streak, style }) => {
    const avatarIconDisplay = avatar ? avatar : require(avatarIcon);
    const fireIconDisplay = require(fireIcon);
    const bellIconDisplay = require(bellIcon);

    const mergedStyle = [styles_home.SocialBubble, style];

    return (
      <View style={mergedStyle}>
        <Image source={bellIconDisplay} style={styles_social.BellIcon} />
        <Image source={avatarIconDisplay} style={styles_social.AvatarIcon} />
        <View>
          <Image source={fireIconDisplay} style={styles_social.FireIcon} />
          <Text>{streak}</Text>
        </View>
      </View>
    );
}