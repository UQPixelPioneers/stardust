
import { StyleSheet } from 'react-native';

let styles_medication = StyleSheet.create({
    PillIcon: {
        aspectRatio: 1,
        height: undefined,
        width: 100,
        flex: 1,
    },
    Status: {
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
    PillList:{
        padding: 30,
    },
    EntryCard:{
        flexDirection:"column",
        justifyContent: "space-between",
        gap: 10,
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center"
        
    },
    EntryName: {
        
    },
    EntryDosage: {

    },
});

export default styles_medication;
