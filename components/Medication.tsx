import { Text, View, ImageBackground, Image, FlatList } from "react-native";

import { BackButton } from "./BackButton";
import { MedicationBubble } from "./MedicationBubble";
import { AddButton } from "./AddButton";

import * as React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from '@/styles/GlobalSheet';
import styles_medication from "@/styles/MedicationSheet";
import {useUserContext} from "@/interfaces/userprovider";
import { MedicationEntry } from "@/interfaces/database";

export const Medication = () =>  {

    const { user } = useUserContext();

    const renderItem = ({ item }: { item: MedicationEntry }) => (
        <MedicationBubble
            key={item.id} // Assuming 'id' is unique and present in MedicationEntry
            name={item.name}
            dosage={item.dosage}
            amount={item.amount}
            frequency={item.frequency || "Daily"} // Default to "Daily" if frequency is not defined
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
              {user && (
                  <FlatList
                      style= {styles_medication.PillList}
                      data={user.medicationList} // Use medEntries as the data source
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id.toString()}
                      numColumns={2} // Adjust as needed
                      contentContainerStyle={styles.listContainer} // Optional styling
                  />
              )}
          </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}