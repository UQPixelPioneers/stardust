import * as React from 'react';
import { Text, View, ScrollView, Pressable, Image, ImageBackground } from "react-native";
import { Footer } from "@/components/Footer";
import styles_home from "@/styles/HomeSheet";
import {FormattedDate} from "@/components/FormattedDate";
import {IntervalUpdater} from "@/components/IntervalUpdater";
import {BottleFinder} from "@/components/BottleFinder";



const BellImage = '../assets/images/notification_bell.png'
const LogoImage = '../assets/images/Stardust_logo.png'


export const Home = () => {

    const [user, onUsernameUpdate] = React.useState('');

    // Loads current user. Should ideally load from account
    React.useEffect(() => {
        onUsernameUpdate("Yuki");
    }, []); // Empty dependency only runs on load

    return (
    <View>
        <ImageBackground>
            <ScrollView>
                <IntervalUpdater interval={1000} children={<FormattedDate/>}/>
                <Pressable>
                    <Image source={require(BellImage)}/>
                </Pressable>
                <Image source={require(LogoImage)}>
                </Image>
                <Text style={styles_home.HeadingHome}>Welcome back, {user}!</Text>
                <IntervalUpdater interval={500} children={<BottleFinder/>}/>
                <View style={styles_home.MedsReminder}>
                    <Text>THis is MedsReminder</Text>
                </View>
                <View style={styles_home.SocialReminders}>
                    <Text>THis is Social Reminders</Text>
                </View>
            </ScrollView>



            <Footer></Footer>
        </ImageBackground>
        
    </View>
  )
}