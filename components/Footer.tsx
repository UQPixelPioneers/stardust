import { View} from "react-native";
import styles_footer from "@/styles/FooterSheet";
import {useRoute} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FooterOption } from "@/components/FooterOption";

const homeIcon = '../assets/images/homeIcon.png';
const manageIcon = '../assets/images/manageIcon.png';
const socialIcon = '../assets/images/socialIcon.png';
const settingsIcon = '../assets/images/settingsIcon.png';

export const Footer = ({}) => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    return (
        <View style={styles_footer.Footer}>
            <FooterOption nav={navigation} route={route} routeName="Home" routeIcon={require(homeIcon)}/>
            <FooterOption nav={navigation} route={route} routeName="Management" routeIcon={require(manageIcon)}/>
            <FooterOption nav={navigation} route={route} routeName="Social" routeIcon={require(socialIcon)}/>
            <FooterOption nav={navigation} route={route} routeName="Setting" routeIcon={require(settingsIcon)}/>
        </View>
    );
}

