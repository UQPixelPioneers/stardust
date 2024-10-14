import {ImageSourcePropType} from "react-native";

type FriendEntry = {
    user: User;
    streak: number;
};

type Doctor = {
    id: number
    name: string
    avatar: ImageSourcePropType;
    specialistRole: string
}

type AppointmentEntry = {
    id: number;
    date: string;
    time: string;
    doctor: Doctor
};

type MedicationEntry = {
    id: number;
    name: string;
    dosage: string;
    status: string;
};

type User = {
    id: number;
    name: string;
    username: string;
    password: string;
    avatar: ImageSourcePropType;
    appointmentList: AppointmentEntry[];
    medicationList: MedicationEntry[];
    friendList: FriendEntry[];
};
export {User, AppointmentEntry, MedicationEntry, Doctor, FriendEntry};
