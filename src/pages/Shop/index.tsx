import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Header } from '../../common/Header';

type RootStackParamList = {
  Shop: { typeElement: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Shop'>;

export const Shop = ({ route }: Props) => {
  const { typeElement } = route.params;

  console.log(typeElement);
  return (
    <>
      <Header typeElement={typeElement} />
      <View>
        <Text>Shasdasdop</Text>
      </View>
    </>
  );
};
