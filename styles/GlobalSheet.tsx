
import { StyleSheet } from 'react-native';



let styles = StyleSheet.create({
  GlobalView: {
    flex: 1
  },
  Background: {
    height: "100%",
    overflow: "hidden",
  },
  Heading: {
    fontSize: 40,
    fontFamily: "ArialBold",
  },
  Heading2: {
    paddingTop: 10,
    marginTop: 10,
    fontSize: 15,
    fontFamily: "ArialBold",
  },
  Scrollable: {
    flex:1,
  },
  Page: {
      margin: 10,
      flex: 1,
  },
  Container: {
    flex: 1
  },
  BackArrow:{
    width: 30,
    height: 30,
    marginBottom: 50,
    tintColor: "brown",
  },
  AddButton:{
    aspectRatio: 1,
    width: 45,
    height: undefined,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: 0,
  },
  listContainer:{

  },
  TopContainer:{
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 5,
},
  Date: {}

});

export default styles;
