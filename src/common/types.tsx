import { Image } from "react-native";

export type RootStackParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
  Details: { typeElement: string; id: number };
  Cart: undefined;
};

export type ShopParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};
export type DetailsParams = {
  Details: { typeElement: string; id: number };
};

export type PokeDataList = {
  item: {
    pokemon: {
      name: string;
      id: number;
      url: string;
    };
  };
  typeElement: string;
};

export type PokeData = {
  id: number;
  sprites: { front_default: string };
};

export type PokeStatusCard = {
  base_stat: string;
  stat: { name: string };
};

export type PokeStatus = {
  name: string;
  id: number;
  sprites: { front_default: string };

  stats: PokeStatusCard[];

  types: [
    {
      type: {
        name: string;
      };
    }
  ];
};

export type TypeProps = {
  item: {
    type: {
      name: string;
    };
  };
};
