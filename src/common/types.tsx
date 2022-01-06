import { Image } from "react-native";

export type RootStackParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type ShopParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type PokeData = {
  item: { pokemon: { name: string, id: number, url: string } };
};
