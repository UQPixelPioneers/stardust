
import { Login } from "./Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

  );
}


