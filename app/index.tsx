
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import {Home} from "./Home";
import {Login} from "./Login";

const Stack = createNativeStackNavigator();

export default function Index() {

    const landingRoute = "Login";

    return (
      <Stack.Navigator initialRouteName={landingRoute}>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    );
}


