import {Text, View, Pressable, ImageBackground, Image, FlatList} from "react-native";
import styles from '@/styles/GlobalSheet';
import { Footer } from "@/components/Footer";
import { BackButton } from "./BackButton";
import { MedicationEntry } from "./MedicationEntry";
import { AddButton } from "./AddButton";
import {MedicationReminder} from "@/components/MedicationReminder";
import styles_home from "@/styles/HomeSheet";
import * as React from "react";
import {Key} from "react";



export const Medication = () =>  {

    // Sample data for medications
    const medEntries = Array.from({ length: 7 }, (_, index) => ({
        id: String(index + 1), // Unique id for each entry
        name: "Medication " + (index + 1), // Example medication name
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
    <View>
      <ImageBackground>
        <BackButton></BackButton>
        <AddButton></AddButton>

      <Text>Medication</Text>
      <Text>You have taken your medication</Text>
          <FlatList
              data={medEntries} // Use medEntries as the data source
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2} // Adjust as needed
              //contentContainerStyle={styles.listContainer} // Optional styling
          />


      </ImageBackground>

    </View>

  );
}