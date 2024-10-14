import * as React from "react";
import {Text, View, ImageBackground, FlatList, Image, Switch, TouchableOpacity} from "react-native";
import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";
import styles_appointment from "@/styles/AppointmentSheet";
import styles from "@/styles/GlobalSheet";

const avatarIcon = "../assets/images/avatarIcon.png";
const bgImage = '../assets/backgrounds/mainBackground.png';

export const Appointment = () =>  {
    const [isUpcoming, setIsUpcoming] = React.useState(true);

    const appointments : any[] = [];

    appointments.push(
        {
            id: "1",
            date: "2024-10-9",
            time: "8:30 AM",
            doctorAvatar: require(avatarIcon),
            doctorName: "Dr. Elizabeth Choo",
            specialistRole: "Neurosurgeon",
        },
        {
            id: "2",
            date: "2024-10-11",
            time: "8:30 AM",
            doctorAvatar: require(avatarIcon),
            doctorName: "Dr. Elizabeth Choo",
            specialistRole: "Neurosurgeon",
        },
        {
            id: "3",
            date: "2024-10-13",
            time: "8:30 AM",
            doctorAvatar: require(avatarIcon),
            doctorName: "Dr. Elizabeth Choo",
            specialistRole: "Neurosurgeon",
        },
        {
            id: "4",
            date: "2024-10-15",
            time: "8:30 AM",
            doctorAvatar: require(avatarIcon),
            doctorName: "Dr. Elizabeth Choo",
            specialistRole: "Neurosurgeon",
        },
    )

    const appointmentFilter = isUpcoming
        ? appointments.filter((appointment) => new Date(appointment.date) >= new Date())
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              <View style={styles_appointment.AppointmentCard}>
                  <Text style={styles_appointment.AppointmentText}>
                      {item.date}, {item.time}
                  </Text>
                  <View style={styles_appointment.DoctorInfo}>
                      <Image source={item.doctorAvatar} style={styles_appointment.DoctorAvatar}/>
                      <View>
                          <Text style={styles_appointment.DoctorName}>{item.doctorName}</Text>
                          <Text style={styles_appointment.SpecialistRole}>{item.specialistRole}</Text>
                      </View>
                  </View>
              </View>
          )}
          />
      </ImageBackground>
    </View>

  );
}