import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";

export const Router = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Shop" component={Shop} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
