import { StyleSheet } from 'react-native';

let styles_footer = StyleSheet.create({
    IconActive: {
        flexGrow: 1, // This box will grow to fill twice as much space as the others
        flexShrink: 1, // This box will shrink if necessary
        flexBasis: 35, // Starts at 100px width
        aspectRatio: 1,
        height: undefined,
        padding: 30,
        width: 30,
    },
    IconInactive: {
        flexGrow: 1, // This box will grow to fill twice as much space as the others
        flexShrink: 1, // This box will shrink if necessary
        flexBasis: 35, // Starts at 100px width
        aspectRatio: 1,
        height: undefined,
        tintColor: "#CFACC5",
        padding: 30,
        width: 30,
    },
    Footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 20,
        flex: 2,
        backgroundColor: "white",
        paddingTop: 10,
        borderRadius: 10,
    },

});

export default styles_footer;
