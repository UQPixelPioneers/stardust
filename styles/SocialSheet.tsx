
import { StyleSheet } from 'react-native';

let styles_social = StyleSheet.create({
    BellIcon: {
        aspectRatio: 1,
        height: undefined,
        flex: 1,
    },
    Status: {
        flexDirection: 'row',
        alignItems: "center",
        zIndex: 1,
        position: "absolute",
        width: 60,
        height: 40,
        top: 80,
        left: 18,
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        gap: 5,
    },
    AvatarIcon: {
        // aspectRatio: 1,
        // height: undefined,
        width: 100,
        height: 100,
        flex: 1,
        borderRadius: 50,
        zIndex: 0,
        opacity: 0.65,

    },
    FireIcon: {
        aspectRatio: 1,
        height: undefined,
        // width: 10,
        // height: 10,
        flex: 1,
        tintColor: "white",


    },
    Streak:{
        color:"white",
    }
});

export default styles_social;
