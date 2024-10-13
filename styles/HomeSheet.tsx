
import { StyleSheet } from 'react-native';



let styles_home = StyleSheet.create({
    Logo: {
        width: 100,
        height: 100,
    },
    HeadingHome: {

    },
    MedsReminders: {
        height: "100%",
    },
    MedsContain: {
        width: "auto",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    MedsBubble: {
        aspectRatio: "1",
        flex: 1,
    },
    BottleStatus: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottleIcon: {
        aspectRatio: 1,
        height: undefined,
        flex: 1,
        maxWidth: 25,
    },
    BottleLabel: {
        flex : 1,
    },
    SocialReminders: {
        borderColor: "red",
        borderWidth: 10,
        height: "100%",
    },
    SocialContain: {
        width: "auto",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    SocialBubble: {
        aspectRatio: "1",
        flex: 1,
    },
});

export default styles_home;
