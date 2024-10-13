import { Text, View, ScrollView, Pressable, Image, ImageBackground } from "react-native";
import { Login } from "./Login";
import { Footer } from "@/components/Footer";
import styles from '@/styles/GlobalSheet';
import styles_home from "@/styles/HomeSheet";
import {FormattedDate} from "@/components/FormattedDate";
import {IntervalUpdater} from "@/components/IntervalUpdater";


const BellImage = '../assets/images/notification_bell.png'
const LogoImage = '../assets/images/Stardust_logo.png'


export const Home = () => {
  return (
    <View>
        <ImageBackground>
            <ScrollView>

            </ScrollView>
            <IntervalUpdater interval={1000} children={<FormattedDate/>}/>
            <Pressable>
                <Image source={require(BellImage)}>

                </Image>
            </Pressable>
            <Image source={require(LogoImage)}>

            </Image>
            <Text style={styles_home.HeadingHome}> Welcome back</Text>
            <Text>Location</Text>
            <View style={styles_home.MedsReminder}>
                <Text>THis is MedsReminder</Text>
            </View>
            <View style={styles_home.SocialReminders}>
                <Text>THis is Social Reminders</Text>   
            </View>


            <Footer></Footer>
        </ImageBackground>
        
    </View>
  )
}