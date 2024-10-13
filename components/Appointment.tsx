import { Text, View, Pressable, ImageBackground } from "react-native";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";


export const Appointment = () =>  {
  return (
    <View>
      <ImageBackground>
        <BackButton></BackButton>
        <AddButton></AddButton>

      <Text>Appointment</Text>


      </ImageBackground>
    </View>

  );
}