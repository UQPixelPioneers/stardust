
import { StyleSheet } from 'react-native';

let styles_management = StyleSheet.create({
    MedButton: {
        padding: 35,
        backgroundColor: "red",
        borderRadius: 30,
        marginBottom: 50,
        marginTop: 50,
        //Shadow
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
        //flex
        flexDirection: "row",
        justifyContent: 'space-between',
        // gap: 0,
    },
    AppointmentButton: {
        padding: 35,
        backgroundColor: "red",
        borderRadius: 30,
        marginBottom: 50,
        marginTop: 50,
        //Shadow
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
        //flex
        flexDirection: "row",
        justifyContent: 'space-between',
        // gap: 0,
    },
    PillIcon:{
        width: 40,
        height:40,
    },
    ArrowIcon: {
        width: 40,
        height:40,
        transform: [{rotate: "180deg"}]
    }
});

export default styles_management;
