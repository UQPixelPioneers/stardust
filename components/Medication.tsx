import {Text, View, Pressable, ImageBackground, Image, FlatList, ScrollView} from "react-native";

import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";
import { MedicationEntry } from "./MedicationEntry";
import { AddButton } from "./AddButton";
import {MedicationReminder} from "@/components/MedicationReminder";

import * as React from "react";
import {Key} from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from '@/styles/GlobalSheet';
import styles_medication from "@/styles/MedicationSheet";
import styles_home from "@/styles/HomeSheet";




export const Medication = () =>  {

    // Sample data for medications
    const medEntries = Array.from({ length: 7 }, (_, index) => ({
        id: String(index + 1), // Unique id for each entry
        name: "Medication " + (index + 1) + " ", // Example medication name
        dosage: 10,
        amount: 2,
        frequency: "Daily",
    }));

    const renderItem = ({ item }: { item: { id: string; name: string; dosage: number; amount: number; frequency: string; } }) => (
        <MedicationEntry
            key={item.id}
            name={item.name}
            dosage={item.dosage}
            amount={item.amount}
            frequency={item.frequency}
        />
    );

    return (
      <ImageBackground source={require("@/assets/backgrounds/mainBackground.png")} style={styles.Background}>
        <SafeAreaProvider>
          <SafeAreaView  style={styles.Page}>
            <View style={styles.TopContainer}>
            <BackButton></BackButton>
            <AddButton></AddButton>
            </View>
            
            <Text style={[styles.Heading, styles_medication.MedicationHeading]}>Medication</Text>

            <View style={styles_medication.TakenMeds}>
              <Image source={require("../assets/images/CheckMarks.png")} style={[ styles_medication.MedicationCheckIcon]}>
              </Image>
              <Text style={styles_medication.MedicationText}>You have taken your medication</Text>
            </View>


                <FlatList
                    style= {styles_medication.PillList}
                    data={medEntries} // Use medEntries as the data source
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2} // Adjust as needed
                    contentContainerStyle={styles.listContainer} // Optional styling
                />




          </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}