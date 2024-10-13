import { Text, View, Pressable, ImageBackground, Image } from "react-native";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";
import { MedicationEntry } from "./MedicationEntry";
import { AddButton } from "./AddButton";


export const Medication = () =>  {
  return (
    <View>
      <ImageBackground>
        <BackButton></BackButton>
        <AddButton></AddButton>

      <Text>Medication</Text>
      <Text>You have taken your medication</Text>
      <MedicationEntry></MedicationEntry>




      </ImageBackground>

      <Footer></Footer>
    </View>

  );
}