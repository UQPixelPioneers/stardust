import { Text, View, Pressable, ImageBackground } from "react-native";
import { Login } from "./Login";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { useNavigation } from '@react-navigation/native';


export const Management = () =>  {
  const navigation = useNavigation<any>();

  return (
    <View>
      <ImageBackground>
      <Text>Healthcare</Text>
      <Pressable onPress={ () => navigation.navigate("Medication")}>
        <View>
            <Text>Medication</Text>
        </View>
      </Pressable>
      <Pressable onPress={ () => navigation.navigate("Appointment")}>
        <View>
        <Text>Appointment</Text>
        </View>
      </Pressable>

      </ImageBackground>

      <Footer></Footer>
    </View>

  );
}