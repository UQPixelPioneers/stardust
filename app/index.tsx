
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import {Startup} from "./Startup";
import {Home} from "./Home";
import {Login} from "./Login";
import { Management } from './Management';
import { Social } from './Social';
import { Setting } from './Setting';
import { Medication } from '@/components/Medication';
import { Appointment } from '@/components/Appointment';





const Stack = createNativeStackNavigator();

export default function Index() {

    const landingRoute = "Startup";

    return (
      <Stack.Navigator initialRouteName={landingRoute}>
          <Stack.Screen name="Startup" component={Startup} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Management" component={Management} options={{headerShown: false}} />
          <Stack.Screen name="Medication" component={Medication} options={{headerShown: false}} />
          <Stack.Screen name="Appointment" component={Appointment} options={{headerShown: false}} />
          <Stack.Screen name="Social" component={Social} options={{headerShown: false}} />
          <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}} />
          

      </Stack.Navigator>
    );
}


