
import { StyleSheet } from 'react-native';



let styles_home = StyleSheet.create({
    Logo: {
        width: 75,
        height: 75,
        marginTop: 25,
        marginLeft: 10,
        marginBottom: 50,
        marginRight: 5,
    },
    MedsReminders: {
        height: "100%",
        backgroundColor: "white",
        margin: "5%",
        padding: "5%",
        borderRadius: 25,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
    },

    MedsContain: {
        width: "auto",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        
    },
    PillIcon: {
        aspectRatio: 1,
        height: undefined,
        flex: 1,
    },
    StatusMeds: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    StatusIcon: {
        aspectRatio: 1,
        height: undefined,
        flex: 1,
    },
    StatusText: {
        flex: 4,
    },
    Bubble: {
        aspectRatio: "1",
        flex: 1,
    },
    MedsBubble: {

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
        height: "100%",
        backgroundColor: "white",
        margin: "5%",
        padding: "5%",
        borderRadius: 25,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
        position:"relative",

    },

    SocialContain: {
        width: "auto",
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    SocialBubble: {
        position: "relative",
        
        
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
    StatusFren: {
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

export default styles_home;
