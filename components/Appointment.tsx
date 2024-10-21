import * as React from "react";
import {Text, View, ImageBackground, FlatList, Image, Switch, TouchableOpacity} from "react-native";
import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";
import styles_appointment from "@/styles/AppointmentSheet";
import styles from "@/styles/GlobalSheet";
import {useUserContext} from "@/interfaces/userprovider";
import {AppointmentEntry} from "@/interfaces/database";

const avatarIcon = "../assets/images/avatarIcon.png";
const bgImage = '../assets/backgrounds/mainBackground.png';

export const Appointment = () =>  {
    const [isUpcoming, setIsUpcoming] = React.useState(true);
    const { user } = useUserContext();

    // Change appointments to an array type
    const appointments: AppointmentEntry[] = user?.appointmentList || []; // Make sure this is an array

    // Correct filtering of appointments based on date
    const appointmentFilter = isUpcoming
        ? appointments.filter((appointment) => new Date(appointment.date) >= new Date()) // Compare with appointment.date
        : appointments.filter((appointment) => new Date(appointment.date) < new Date());

    return (
    <View>
        <ImageBackground
            //source={require(bgImage)}
            //style={styles.backgroundImage}
            >
        <BackButton></BackButton>
        <AddButton></AddButton>

      <Text>Appointments</Text>
      <View>
          <TouchableOpacity
              style={[styles_appointment.ToggleButton, isUpcoming && styles_appointment.ActiveButton]}
              onPress={() => setIsUpcoming(true)}
          >
              <Text style={[styles_appointment.ToggleText, isUpcoming && styles_appointment.ActiveText]}>
                  Upcoming
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles_appointment.ToggleButton, !isUpcoming && styles_appointment.ActiveButton]}
              onPress={() => setIsUpcoming(false)}
          >
              <Text style={[styles_appointment.ToggleText, !isUpcoming && styles_appointment.ActiveText]}>
                  Past
              </Text>
          </TouchableOpacity>
      </View>

      <FlatList
          data={appointmentFilter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <View style={styles_appointment.AppointmentCard}>
                  <Text style={styles_appointment.AppointmentText}>
                      {item.date}, {item.time}
                  </Text>
                  <View style={styles_appointment.DoctorInfo}>
                      <Image source={item.doctor.avatar} style={styles_appointment.DoctorAvatar}/>
                      <View>
                          <Text style={styles_appointment.DoctorName}>{item.doctor.name}</Text>
                          <Text style={styles_appointment.SpecialistRole}>{item.doctor.specialistRole}</Text>
                      </View>
                  </View>
              </View>
          )}
          />
      </ImageBackground>
    </View>

  );
}