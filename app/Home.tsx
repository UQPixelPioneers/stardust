import * as React from 'react';
import { Text, View, ScrollView, Pressable, Image, ImageBackground } from "react-native";
import { Footer } from "@/components/Footer";
import styles_home from "@/styles/HomeSheet";
import {FormattedDate} from "@/components/FormattedDate";
import {IntervalUpdater} from "@/components/IntervalUpdater";
import {BottleFinder} from "@/components/BottleFinder";
import {BounceableImage} from "@/components/BounceableImage";
import styles_login from "@/styles/LoginSheet";
import {HorizontalScrollable} from "@/components/HorizontalScrollable";

const BellImage = '../assets/images/notification_bell.png'
const LogoImage = '../assets/images/stardustLogoColor.png'


import { StyleSheet } from 'react-native';
import {MedicationReminder} from "@/components/MedicationReminder";
import {SocialReminder} from "@/components/SocialReminder";



let test = StyleSheet.create({
    image: {
        borderWidth: 5,
        borderColor: 'red',
        height: 100, // Set a height for visibility
    },
});



export const Home = () => {

    const [user, onUsernameUpdate] = React.useState('');

    // Loads current user. Should ideally load from account
    React.useEffect(() => {
        onUsernameUpdate("Yuki");
    }, []); // Empty dependency only runs on load

    const medEntries = Array.from({ length: 7 }, (_, index) => (
        <MedicationReminder
            key={index + 1} // Use index + 1 for keys
            name={"Placeholder"}
            status={true}
        />
    ));

    const socialEntries = Array.from({ length: 7 }, (_, index) => (
        <SocialReminder key={index + 1}/>
    ));

    return (
    <View>
        <ImageBackground>
            <ScrollView>
                <IntervalUpdater interval={1000} children={<FormattedDate/>}/>
                <Pressable>
                    <Image source={require(BellImage)}/>
                </Pressable>
                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <Text style={styles_home.HeadingHome}>Welcome back, {user}!</Text>
                <IntervalUpdater interval={500} children={<BottleFinder/>}/>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.MedsReminders}
                    styleContainer={styles_home.MedsContain}
                    children={medEntries}/>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.SocialReminders}
                    styleContainer={styles_home.SocialContain}
                    children={socialEntries}/>
            </ScrollView>



            <Footer></Footer>
        </ImageBackground>
        
    </View>
  )
}