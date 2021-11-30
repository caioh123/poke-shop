import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Shop } from "./src/pages/Shop";

type RootStackParamList = {
  Home: undefined;
  Shop: undefined;
};

export default function App() {
  const stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Shop" component={Shop} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
