import { StyleSheet } from 'react-native';

let styles_footer = StyleSheet.create({
    IconActive: {
        flexGrow: 1, // This box will grow to fill twice as much space as the others
        flexShrink: 1, // This box will shrink if necessary
        flexBasis: 50, // Starts at 100px width
        aspectRatio: 1,
        height: undefined,
        padding: 30,
    },
    IconInactive: {
        flexGrow: 1, // This box will grow to fill twice as much space as the others
        flexShrink: 1, // This box will shrink if necessary
        flexBasis: 50, // Starts at 100px width
        aspectRatio: 1,
        height: undefined,
        tintColor: "#CFACC5",
        padding: 30,
    },
    Footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

});

export default styles_footer;
