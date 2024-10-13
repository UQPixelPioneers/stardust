
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
    HeadingHome: {
        fontSize: 40,
        fontFamily: "ArialBold",
    },
    Heading2Home: {
        paddingTop: 10,
        marginTop: 10,
        fontSize: 15,
        fontFamily: "ArialBold",
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
