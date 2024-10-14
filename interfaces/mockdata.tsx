// Doctors
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
                date: "2024-10-15",
                time: "9:00 AM",
                doctor: doctors[0],
            },
        ],
        medicationList: [
            {
                id: 1,
                name: "Ibuprofen",
                dosage: "200mg",
                status: "Due Now",
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
                id: 2,
                date: "2024-10-17",
                time: "11:00 AM",
                doctor: doctors[1],
            },
        ],
        medicationList: [
            {
                id: 2,
                name: "Paracetamol",
                dosage: "500mg",
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
                id: 3,
                date: "2024-10-19",
                time: "2:00 PM",
                doctor: doctors[2],
            },
        ],
        medicationList: [
            {
                id: 3,
                name: "Vitamin D",
                dosage: "1000 IU",
                status: "Due 2 hours ago",
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
                id: 4,
                date: "2024-10-21",
                time: "10:00 AM",
                doctor: doctors[3],
            },
        ],
        medicationList: [
            {
                id: 4,
                name: "Aspirin",
                dosage: "81mg",
                status: "Due Now",
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
