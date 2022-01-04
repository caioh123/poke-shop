import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { RootStackParamList } from "../common/types";



export const Router = () => {
  const stack = createStackNavigator<RootStackParamList>();



  

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <stack.Screen options={{headerShown: false}} name="Shop" component={Shop} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
