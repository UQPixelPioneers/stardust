import { Text, View, Pressable, ImageBackground, ScrollView, Image} from "react-native";
import { Login } from "./Login";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { useNavigation } from '@react-navigation/native';
import styles_management from "@/styles/ManagementSheet";
import { SafeAreaProvider, SafeAreaView  } from "react-native-safe-area-context";
import { BackButton } from "@/components/BackButton";



export const Management = () =>  {
  const navigation = useNavigation<any>();

  return (
    <>
      <ImageBackground source={require("@/assets/backgrounds/homeBackground.png")} style={styles.Background}>
        <SafeAreaProvider>
                  <SafeAreaView  style={styles.Page}>
                            <ScrollView style ={styles.Scrollable} >

                              <BackButton></BackButton>
                              <Text style={styles.Heading}>Healthcare</Text>
                              <Pressable onPress={ () => navigation.navigate("Medication")}>
                                <View style={styles_management.MedButton}>
                                  <Image source={require("../assets/images/pillHollow.png")} style= {styles_management.PillIcon}></Image>
                                  <Text style={styles_management.ManagementText}>Medication</Text>
                                  <Image source={require("../assets/images/BackArrow.png")} style= {styles_management.ArrowIcon}></Image>
                                </View>
                              </Pressable>
                              <Pressable onPress={ () => navigation.navigate("Appointment")}>
                                <View style={styles_management.AppointmentButton}>
                                <Image source={require("../assets/images/AppointmentIcon.png")} style= {styles_management.PillIcon}></Image>
                                  <Text style={styles_management.ManagementText}>Appointment</Text>
                                <Image source={require("../assets/images/BackArrow.png")} style= {styles_management.ArrowIcon}></Image>
                                </View>
                              </Pressable>

                              
                            </ScrollView>
                  </SafeAreaView>

        </SafeAreaProvider>
        </ImageBackground>

    </>

  );
}