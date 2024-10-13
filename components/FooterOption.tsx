import {Pressable, Image, ImageSourcePropType,} from "react-native";
import styles_footer from "@/styles/FooterSheet";
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {FC} from "react";

interface FooterOptionProps {
    nav: any;
    route: RouteProp<ParamListBase>;
    routeName: string;
    routeIconURI: ImageSourcePropType;
}

export const FooterOption: FC<FooterOptionProps> = ({ nav, route, routeName, routeIconURI }) => {
    return (
        <Pressable onPress={ () => nav.navigate(routeName)}>
            <Image
                style={route.name == routeName ? styles_footer.IconActive : styles_footer.IconInactive }
                source={routeIconURI}
            />
        </Pressable>
    );
}

