import { Text, View, Pressable, ImageBackground, Image } from "react-native";
import styles_medication from "@/styles/MedicationSheet";



export const MedicationEntry = () =>  {
  return (
    <View>
        <Image source={require("../assets/images/Pill.png")} style= {styles_medication.PillIcon}>

        </Image>
        <Text>
            Pill's name
        </Text>
        <View>
            <Text>Amount of pills</Text>
            <Text>Times per day</Text>
        </View>
    </View>

  );
}