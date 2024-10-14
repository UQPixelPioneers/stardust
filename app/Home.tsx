import * as React from 'react';
import { Text, View, ScrollView, Pressable, Image, ImageBackground, } from "react-native";
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
import {useUserContext} from "@/interfaces/userprovider";


export const Home = () => {

    const [username, onUsernameUpdate] = React.useState('');
    const [fontsLoaded] = useFonts({
        "ArialBold": require("../assets/fonts/Arial_Rounded_Bold.ttf"),
      });
    const { user } = useUserContext();

    // Loads current user. Should ideally load from account
    React.useEffect(() => {
        onUsernameUpdate(user?.name ?? "");
    }, []); // Empty dependency only runs on load

    const medReminders = user?.medicationList.map((medication, index) => (
        <MedicationReminder
            key={index} // Using index as a key (ideally use a unique ID if available)
            name={medication.name} // Populating with medication name
            status={medication.status === "Taken"} // Assuming 'status' is a string, and checking if it's "Taken"
            style={styles_home.MedsBubble} // The style for each bubble
        />
    ));

    const socialReminders = user?.friendList.map((friendEntry, index) => (
        <SocialReminder
            key={index} // Use index or friend's unique ID for the key
            avatar={friendEntry.user.avatar}
            streak={friendEntry.streak} // Pass the streak value for each friend
            style={styles_home.SocialBubble} // Style for each social reminder
        />
    ));

    return (
    <>
        <ImageBackground source={require("@/assets/backgrounds/homeBackground.png")} style={styles.Background}>
            <SafeAreaProvider>
            <SafeAreaView  style={styles.Page}>
            <ScrollView style ={styles.Scrollable} >
                <View style={styles_home.DateBellContainer}>
                    <IntervalUpdater interval={1000} children={<FormattedDate/>}/>
                    <Pressable>
                        <Image source={require(BellImage)} style={styles_home.BellIcon}/>
                    </Pressable>
                </View>

                <BounceableImage source={require(LogoImage)} max_scale={1.2} duration={275} style={styles_home.Logo}/>
                <Text style={styles.Heading}>Welcome back, {username}!</Text>
                <IntervalUpdater interval={500} children={<BottleFinder/>}/>
                <Text style={styles.Heading2}>Your Medication today!</Text>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.MedsReminders}
                    styleContainer={styles_home.MedsContain}
                    children={medReminders}/>
                <Text style={styles.Heading2}>Friend's Streak!</Text>
                <HorizontalScrollable
                    elemNum={3}
                    style={styles_home.SocialReminders}
                    styleContainer={styles_home.SocialContain}
                    children={socialReminders}/>
            </ScrollView>
            </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
        
    </>
  )
}