
import { Login } from "./Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


