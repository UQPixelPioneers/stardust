import { Text, View, Pressable, ImageBackground, Image } from "react-native";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";
import { MedicationEntry } from "./MedicationEntry";


export const Medication = () =>  {
  return (
    <View>
      <ImageBackground>
        <BackButton></BackButton>
        <Pressable>
            <Image source={require("../assets/images/AddButton.png")} style={styles.AddButton} >

            </Image>
        </Pressable>

      <Text>Medication</Text>
      <Text>You have taken your medication</Text>
      <MedicationEntry></MedicationEntry>




      </ImageBackground>

      <Footer></Footer>
    </View>

  );
}