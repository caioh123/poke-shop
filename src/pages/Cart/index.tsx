import React from "react";
import { Header } from "../../common/Header";
import { View, Text } from "react-native";

export const Cart = ({ route }) => {
  const { typeElement } = route.params;

  return (
    <>
      <Header typeElement={typeElement} />
      <View>
        <Text>oi</Text>
      </View>
    </>
  );
};
