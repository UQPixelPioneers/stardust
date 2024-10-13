import { Text, View, Pressable, ImageBackground } from "react-native";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";


export const Appointment = () =>  {
  return (
    <View>
      <ImageBackground>
        <BackButton></BackButton>
      <Text>Appointment</Text>


      </ImageBackground>

      <Footer></Footer>
    </View>

  );
}