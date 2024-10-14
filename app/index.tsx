
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {ReactNode} from "react";
import {Startup} from "./Startup";
import {Home} from "./Home";
import {Login} from "./Login";
import { Management } from './Management';
import { Social } from './Social';
import { Setting } from './Setting';
import { Medication } from '@/components/Medication';
import { Appointment } from '@/components/Appointment';
import {Footer} from "@/components/Footer";
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

// Wrapper component
const SetupPage = (Component: React.FC, screenTitle: string) => {
    return (props: any) => {
        React.useEffect(() => {
            if (Platform.OS === 'web') {
                document.title = `Stardust | ${screenTitle}`;
            }
        }, []);

        return (
            <>
                <Component {...props} />
                <Footer />
            </>
        );
    };
};

export default function Index() {
    const landingRoute = "Startup";

    return (
        <Stack.Navigator initialRouteName={landingRoute}>
            <Stack.Screen name="Startup" component={SetupPage(Startup, "Getting Started")} />
            <Stack.Screen name="Home" component={SetupPage(Home, "Home")} />
            <Stack.Screen name="Login" component={SetupPage(Login, "Login")} />
            <Stack.Screen name="Management" component={SetupPage(Management, "Management")} />
            <Stack.Screen name="Medication" component={SetupPage(Medication, "Medication")} />
            <Stack.Screen name="Appointment" component={SetupPage(Appointment, "Appointment")} />
            <Stack.Screen name="Social" component={SetupPage(Social, "Social")} />
            <Stack.Screen name="Setting" component={SetupPage(Setting, "Settings")} />
        </Stack.Navigator>
    );
}


