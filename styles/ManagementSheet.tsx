
import { Management } from '@/app/Management';
import { StyleSheet } from 'react-native';

let styles_management = StyleSheet.create({
    MedButton: {
        padding: 35,
        backgroundColor: "orange",
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
        alignContent: "center",
    },
    AppointmentButton: {
        padding: 35,
        backgroundColor: "pink",
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

    },
    PillIcon:{
        width: 40,
        height:40,
    },
    ArrowIcon: {
        width: 40,
        height:40,
        transform: [{rotate: "180deg"}]
    },
    ManagementText:{
        color: "white",
        fontSize: 20,
        paddingTop: 7,

            
    }
});

export default styles_management;
