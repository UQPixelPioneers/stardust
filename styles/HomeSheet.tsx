
import { StyleSheet } from 'react-native';



let styles_home = StyleSheet.create({
    Logo: {
        width: 10,
        aspectRatio: 1,
        height: undefined,
        marginLeft: 10,
        //marginBottom:5,
        marginRight: 5,
        borderWidth: 2,
        borderColor: "red",
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
        borderWidth: 3,
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

    Scrollable: {
        flex:1,


    },
    Page: {
        margin: 10,
        flex: 1,

    },
    BellIcon: {
        width: 50,
        height: 50,
    },
    DateBellContainer:{
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 5,
    },
});

export default styles_home;
