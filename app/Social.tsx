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
import {FriendEntry, User} from "@/interfaces/database";
import {useUserContext} from "@/interfaces/userprovider";

const avatarIcon = require('../assets/images/avatarIcon.png');
const bellIcon = require("../assets/images/notification_bell.png");

type Friend = {
    id: string;
    name: string;
    dosageStatus: string;
    avatar: any;
};

export const Social = () => {
    const { user } = useUserContext();

    // Assuming `user` is defined and has a `friendList` property of type `FriendEntry[]`
    const friendsData: FriendEntry[] = user?.friendList || [];

    // Mapping friend data to use directly in the FlatList
    const friendList = friendsData.map((friendEntry: FriendEntry) => ({
        id: friendEntry.user.id.toString(), // Ensure ID is a string for FlatList
        name: friendEntry.user.name,
        dosageStatus: `Streak: ${friendEntry.streak}`, // Adjust this as needed for your application
        avatar: friendEntry.user.avatar, // Use the user's avatar directly
    }));

    const renderItem = ({ item }: { item: { id: string; name: string; dosageStatus: string; avatar: any; } }) => (
        <View style={styles_social.FriendCard}>
            <Image source={item.avatar} style={styles_social.FriendIcon} />
            <View style={styles_social.FriendDetails}>
                <Text style={styles_social.FriendName}>{item.name}</Text>
                <Text style={styles_social.FriendDosage}>{item.dosageStatus}</Text>
            </View>
            <TouchableOpacity>
                <Image source={bellIcon} style={styles_social.FriendNotification} />
            </TouchableOpacity>
        </View>
    );

    return (
        <ImageBackground source={require("@/assets/backgrounds/homeBackground.png")} style={styles.Background}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.Page}>
                    <View style={styles.TopContainer}>
                        <BackButton />
                        <AddButton />
                    </View>
                    <View style={[styles.TopContainer, styles_social.SocialTop]}>
                        <Image source={user?.avatar} style={styles_social.UserIcon} />
                        <Text style={styles_social.StatusText}>Set your status:</Text>
                    </View>

                    <Text style={styles_social.CircleTitle}>Your Circle</Text>
                    <FlatList
                        data={friendList}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
};