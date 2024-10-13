import * as React from 'react';
import { Text, View, ScrollView, Pressable, Image, ImageBackground, } from "react-native";
import { Footer } from "@/components/Footer";
import styles from '@/styles/GlobalSheet';
import styles_home from "@/styles/HomeSheet";
import {FormattedDate} from "@/components/FormattedDate";
import {IntervalUpdater} from "@/components/IntervalUpdater";
import {BottleFinder} from "@/components/BottleFinder";
import {BounceableImage} from "@/components/BounceableImage";

import {HorizontalScrollable} from "@/components/HorizontalScrollable";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";


const BellImage = '../assets/images/notification_bell.png'
const LogoImage = '../assets/images/stardustLogoColor.png'


import { StyleSheet } from 'react-native';
import {MedicationReminder} from "@/components/MedicationReminder";
import {SocialReminder} from "@/components/SocialReminder";


export const Home = () => {

    const [user, onUsernameUpdate] = React.useState('');
    const [fontsLoaded] = useFonts({
        "ArialBold": require("../assets/fonts/Arial_Rounded_Bold.ttf"),

      });
      if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
      }

    // Loads current user. Should ideally load from account
    React.useEffect(() => {
        onUsernameUpdate("Yuki");
    }, []); // Empty dependency only runs on load

    const medEntries = Array.from({ length: 7 }, (_, index) => (
        <MedicationReminder
            key={index + 1} // Use index + 1 for keys
            name={"Placeholder"}
            status={true}
            style={styles_home.MedsBubble}
        />
    ));

    const socialEntries = Array.from({ length: 7 }, (_, index) => (
        <SocialReminder key={index + 1} streak={9} style={styles_home.SocialBubble}/>
    ));

    return (
    <>
        <ImageBackground source={require("@/assets/backgrounds/homeBackground.png")} style={styles.Background}>
            <SafeAreaProvider>
            <SafeAreaView  style={styles_home.Page}>
            <ScrollView style ={styles_home.Scrollable} >
                <View style={styles_home.DateBellContainer}>
                    <IntervalUpdater interval={1000} children={<FormattedDate/>}/>
                    <Pressable>
                        <Image source={require(BellImage)} style={styles_home.BellIcon}/>
                    </Pressable>
                </View>

                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <Text style={styles_home.HeadingHome}>Welcome back, {user}!</Text>
                <IntervalUpdater interval={500} children={<BottleFinder/>}/>
                <Text style={styles_home.Heading2Home}>Your Medication today!</Text>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.MedsReminders}
                    styleContainer={styles_home.MedsContain}
                    children={medEntries}/>
                <Text style={styles_home.Heading2Home}>Friend's Streak!</Text>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.SocialReminders}
                    styleContainer={styles_home.SocialContain}
                    children={socialEntries}/>
            </ScrollView>
            </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
        
    </>
  )
}