import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Shop } from "./src/pages/Shop";
import { RootStackParamList } from "./src/common/types";
import { Router } from "./src/routes/router";

export default function App() {
  const stack = createStackNavigator<RootStackParamList>();
  return (
    <Router />
  );
}
