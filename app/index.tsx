
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

const Stack = createNativeStackNavigator();

// Wrapper component
const AddFooter = (Component: React.FC) => {
    return (props: any) => (
        <>
            <Component {...props} />
            <Footer />
        </>
    );
};

export default function Index() {
    const landingRoute = "Startup";

    return (
        <Stack.Navigator initialRouteName={landingRoute}>
            <Stack.Screen name="Startup" component={Startup} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={AddFooter(Home)} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Management" component={AddFooter(Management)} options={{headerShown: false}} />
            <Stack.Screen name="Medication" component={AddFooter(Medication)} options={{headerShown: false}} />
            <Stack.Screen name="Appointment" component={AddFooter(Appointment)} options={{headerShown: false}} />
            <Stack.Screen name="Social" component={AddFooter(Social)} options={{headerShown: false}} />
            <Stack.Screen name="Setting" component={AddFooter(Setting)} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}


