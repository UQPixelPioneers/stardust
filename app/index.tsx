
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
const SetupPage = (Component: React.FC, screenTitle: string, useFooter: boolean) => {
    return (props: any) => {
        React.useEffect(() => {
            if (Platform.OS === 'web') {
                document.title = `Stardust | ${screenTitle}`;
            }
        }, []);
        if (useFooter == true){
            return (
            <>
                <Component {...props} />
                <Footer />
            </>
            );
        }else{
            return (
                <>
                    <Component {...props} />

                </>
            );
        }

    };
};

export default function Index() {
    const landingRoute = "Home";

    return (
        <Stack.Navigator initialRouteName={landingRoute}>
            <Stack.Screen 
                name="Startup" 
                component={SetupPage(Startup, "Getting Started", false)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Home" 
                component={SetupPage(Home, "Home", true)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Login" 
                component={SetupPage(Login, "Login", false)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Management" 
                component={SetupPage(Management, "Management", true)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Medication" 
                component={SetupPage(Medication, "Medication", true)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Appointment" 
                component={SetupPage(Appointment, "Appointment", true)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Social" 
                component={SetupPage(Social, "Social", true)} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Setting" 
                component={SetupPage(Setting, "Settings", true)} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}


