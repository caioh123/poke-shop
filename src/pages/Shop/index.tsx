import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';



type RootStackParamList = {
  Shop: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'Shop'>;

export const Shop = ({route, params}: Props) => {
  return (
    <View>
      <Text>Shasdasdop</Text>
    </View>
  );
};
