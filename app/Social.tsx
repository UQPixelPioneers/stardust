import {FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import { Login } from "./Login";
import { Footer } from "@/components/Footer";
import styles from '@/styles/GlobalSheet';
import styles_social from "@/styles/SocialSheet";
import React from "react";
import styles_home from "@/styles/HomeSheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AddButton } from "@/components/AddButton";
import { BackButton } from "@/components/BackButton";

const avatarIcon = "../assets/images/avatarIcon.png";
const bellIcon = "../assets/images/notification_bell.png";

type Friend = {
    id: string;
    name: string;
    dosageStatus: string;
    avatar: any;
};

export const Social = () =>  {
    const friendsData: Friend[] = [
        {
            id: "1",
            name: "Grace",
            dosageStatus: "Due Now",
            avatar: require(avatarIcon), // Replace with actual avatar path
        },
        {
            id: "2",
            name: "Yuki",
            dosageStatus: "Taken 4 hours ago",
            avatar: require(avatarIcon), // Replace with actual avatar path
        },
        {
            id: "3",
            name: "Angela",
            dosageStatus: "Due 2 hours ago",
            avatar: require(avatarIcon), // Replace with actual avatar path
        },
        {
            id: "4",
            name: "Shirley",
            dosageStatus: "Due Now",
            avatar: require(avatarIcon), // Replace with actual avatar path
        },
    ];

    const renderItem = ({ item }: { item: Friend }) => (
        <View style={styles_social.FriendCard}>
            <Image source={item.avatar} style={styles_social.FriendIcon} />
            <View style={styles_social.FriendDetails}>
                <Text style={styles_social.FriendName}>{item.name}</Text>
                <Text style={styles_social.FriendDosage}>{item.dosageStatus}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require(bellIcon)} style={styles_social.FriendNotification} />
            </TouchableOpacity>
        </View>
    );

    return (
        <ImageBackground source={require("@/assets/backgrounds/homeBackground.png")} style={styles.Background}>
             <SafeAreaProvider>
                <SafeAreaView  style={styles.Page}>
                        <View style={styles.TopContainer}>
                            <BackButton></BackButton>
                            <AddButton></AddButton>
                        </View>
                        <View style={[styles.TopContainer, styles_social.SocialTop]}>
                            <Image source={require(avatarIcon)} style={styles_social.UserIcon} />
                            <Text style={styles_social.StatusText}>Set your status:</Text>
                        </View>

                        <Text style={styles_social.CircleTitle}>Your Circle</Text>
                        <FlatList
                            data={friendsData}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />

                </SafeAreaView>

             </SafeAreaProvider>

        </ImageBackground>
       

  );
}