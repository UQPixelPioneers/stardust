// Doctors
import {Doctor, User} from "@/interfaces/database";

const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. Elizabeth Choo",
        avatar: require("../assets/images/doctorAvatar1.png"),
        specialistRole: "Neurosurgeon",
    },
    {
        id: 2,
        name: "Dr. Michael Tan",
        avatar: require("../assets/images/doctorAvatar2.png"),
        specialistRole: "Cardiologist",
    },
    {
        id: 3,
        name: "Dr. Sarah Patel",
        avatar: require("../assets/images/doctorAvatar3.png"),
        specialistRole: "Dermatologist",
    },
    {
        id: 4,
        name: "Dr. James Lee",
        avatar: require("../assets/images/doctorAvatar4.png"),
        specialistRole: "Orthopedic Surgeon",
    },
];

// Mock Users
const users: User[] = [
    {
        id: 1,
        name: "Yuki",
        username: "StarYuki",
        password: "password123",
        avatar: require("../assets/images/userAvatar1.png"),
        appointmentList: [
            {
                id: 1,
                date: "2024-10-12",
                time: "9:00 AM",
                doctor: doctors[0],
            },
            {
                id: 2,
                date: "2024-10-16",
                time: "10:00 AM",
                doctor: doctors[0],
            },
            {
                id: 3,
                date: "2024-10-20",
                time: "11:30 AM",
                doctor: doctors[1],
            },
            {
                id: 4,
                date: "2024-10-21",
                time: "1:00 PM",
                doctor: doctors[1],
            },
        ],
        medicationList: [
            {
                id: 1,
                name: "Ibuprofen",
                dosage: 40,
                amount: 1,
                frequency: "Daily",
                status: "Due Now",
            },
            {
                id: 2,
                name: "Cetirizine",
                dosage: 10,
                amount: 1,
                frequency: "Weekly",
                status: "Taken 2 hours ago",
            },
            {
                id: 3,
                name: "Amoxicillin",
                dosage: 75,
                amount: 2,
                frequency: "Daily",
                status: "Due Tonight",
            },
            {
                id: 4,
                name: "Simvastatin",
                dosage: 20,
                amount: 1,
                frequency: "Daily",
                status: "Due Tomorrow",
            },
            {
                id: 5,
                name: "Multivitamin",
                dosage: 15,
                amount: 1,
                frequency: "Fortnightly",
                status: "Due in 5 days",
            },
        ],
        friendList: [],
    },
    {
        id: 2,
        name: "Grace",
        username: "StarGrace",
        password: "password123",
        avatar: require("../assets/images/userAvatar2.png"),
        appointmentList: [
            {
                id: 1,
                date: "2024-10-13",
                time: "11:00 AM",
                doctor: doctors[1],
            },
            {
                id: 2,
                date: "2024-10-18",
                time: "2:00 PM",
                doctor: doctors[1],
            },
            {
                id: 3,
                date: "2024-10-20",
                time: "3:30 PM",
                doctor: doctors[2],
            },
            {
                id: 4,
                date: "2024-10-22",
                time: "10:30 AM",
                doctor: doctors[2],
            },
        ],
        medicationList: [
            {
                id: 1,
                name: "Metformin",
                dosage: 60,
                amount: 2,
                frequency: "Daily",
                status: "Due in 1 hour",
            },
            {
                id: 2,
                name: "Albuterol",
                dosage: 90,
                amount: 1,
                frequency: "Weekly",
                status: "Due Tomorrow",
            },
            {
                id: 3,
                name: "Losartan",
                dosage: 50,
                amount: 1,
                frequency: "Daily",
                status: "Taken Today",
            },
            {
                id: 4,
                name: "Calcium Carbonate",
                dosage: 20,
                amount: 2,
                frequency: "Fortnightly",
                status: "Due in 6 days",
            },
            {
                id: 5,
                name: "Amlodipine",
                dosage: 30,
                amount: 1,
                frequency: "Daily",
                status: "Taken 4 hours ago",
            },
        ],
        friendList: [],
    },
    {
        id: 3,
        name: "Angela",
        username: "StarAngela",
        password: "password123",
        avatar: require("../assets/images/userAvatar3.png"),
        appointmentList: [
            {
                id: 1,
                date: "2024-10-12",
                time: "1:00 PM",
                doctor: doctors[2],
            },
            {
                id: 2,
                date: "2024-10-19",
                time: "2:00 PM",
                doctor: doctors[2],
            },
            {
                id: 3,
                date: "2024-10-20",
                time: "3:00 PM",
                doctor: doctors[1],
            },
            {
                id: 4,
                date: "2024-10-22",
                time: "9:30 AM",
                doctor: doctors[0],
            },
        ],
        medicationList: [
            {
                id: 1,
                name: "Omeprazole",
                dosage: 20,
                amount: 1,
                frequency: "Daily",
                status: "Due Tomorrow",
            },
            {
                id: 2,
                name: "Vitamin D",
                dosage: 10,
                amount: 2,
                frequency: "Fortnightly",
                status: "Taken 2 days ago",
            },
            {
                id: 3,
                name: "Gabapentin",
                dosage: 50,
                amount: 1,
                frequency: "Daily",
                status: "Due in 3 hours",
            },
            {
                id: 4,
                name: "Levothyroxine",
                dosage: 25,
                amount: 1,
                frequency: "Weekly",
                status: "Due Next Week",
            },
            {
                id: 5,
                name: "Hydrochlorothiazide",
                dosage: 12,
                amount: 1,
                frequency: "Daily",
                status: "Due Tonight",
            },
        ],
        friendList: [],
    },
    {
        id: 4,
        name: "Shirley",
        username: "StarShirley",
        password: "password123",
        avatar: require("../assets/images/userAvatar4.png"),
        appointmentList: [
            {
                id: 1,
                date: "2024-10-14",
                time: "10:00 AM",
                doctor: doctors[3],
            },
            {
                id: 2,
                date: "2024-10-21",
                time: "2:00 PM",
                doctor: doctors[3],
            },
            {
                id: 3,
                date: "2024-10-23",
                time: "11:00 AM",
                doctor: doctors[2],
            },
            {
                id: 4,
                date: "2024-10-25",
                time: "3:00 PM",
                doctor: doctors[1],
            },
        ],
        medicationList: [
            {
                id: 1,
                name: "Prednisone",
                dosage: 30,
                amount: 1,
                frequency: "Daily",
                status: "Due Now",
            },
            {
                id: 2,
                name: "Aspirin",
                dosage: 81,
                amount: 1,
                frequency: "Daily",
                status: "Taken 5 hours ago",
            },
            {
                id: 3,
                name: "Atorvastatin",
                dosage: 40,
                amount: 1,
                frequency: "Fortnightly",
                status: "Due in 4 days",
            },
            {
                id: 4,
                name: "Furosemide",
                dosage: 20,
                amount: 1,
                frequency: "Weekly",
                status: "Due Next Week",
            },
            {
                id: 5,
                name: "Duloxetine",
                dosage: 60,
                amount: 1,
                frequency: "Daily",
                status: "Due Tonight",
            },
        ],
        friendList: [],
    },
];

// Populate friends
users[0].friendList = [
    { user: users[1], streak: 5 },
    { user: users[2], streak: 10 },
    { user: users[3], streak: 7 },
];

users[1].friendList = [
    { user: users[0], streak: 5 },
    { user: users[2], streak: 9 },
    { user: users[3], streak: 6 },
];

users[2].friendList = [
    { user: users[0], streak: 10 },
    { user: users[1], streak: 9 },
    { user: users[3], streak: 8 },
];

users[3].friendList = [
    { user: users[0], streak: 7 },
    { user: users[1], streak: 6 },
    { user: users[2], streak: 8 },
];

export { users, doctors };
