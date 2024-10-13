import { Text, View, Pressable, Image,} from "react-native";
import Home from "@/app/Home";
import { Login } from "@/app/Login";
import styles_footer from "@/styles/FooterSheet";
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';


const gLeafIcon = '../assets/images/gLeafIcon.png';
const leafIcon = '../assets/images/leafIcon.png';
const gSearchIcon = '../assets/images/gSearchIcon.png';
const searchIcon = '../assets/images/searchIcon.png';
const gTrophyIcon = '../assets/images/gTrophyIcon.png';
const trophyIcon = '../assets/images/trophyIcon.png';
const gProfileIcon = '../assets/images/gProfileIcon.png';
const profileIcon = '../assets/images/profileIcon.png';


export const Footer = ({}) => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    return (
        <View style={styles_footer.Icon}>
            {/* Footer Icons */}
            <Pressable onPress={() => navigation.navigate("Home", {screen: "Home"})}>
                <Image
                style={styles_footer.Icon}
                source={route.name == "Home" || route.name == "Add" || route.name == "Notifications"
                    ? require(gLeafIcon):require(leafIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Management", {screen: "Management"})}>
                <Image
                style={styles_footer.Icon}
                source={route.name == "Explore" || route.name == "MoreInfo" || route.name == "History"
                        ? require(gSearchIcon):require(searchIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Social", {screen: "Social"})}>
                <Image
                style={styles_footer.Icon}
                source={route.name == "Achievements" ? require(gTrophyIcon):require(trophyIcon)}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Setting", {screen: "Setting"})}>
                <Image
                style={styles_footer.Icon}
                source={route.name == "Settings" ? require(gProfileIcon):require(profileIcon)}
                />
            </Pressable>
        </View>
    );
}

