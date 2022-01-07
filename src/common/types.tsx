import { Image } from "react-native";

export type RootStackParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type ShopParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type PokeDataList = {
  item: { pokemon: { name: string, id: number, url: string } };
  typeElement: string;
};

export type PokeData = {
  id: number;
  sprites: { front_default: string };

}