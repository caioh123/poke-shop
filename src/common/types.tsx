export type RootStackParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type ShopParamList = {
  Home: { typeElement: string };
  Shop: { typeElement: string };
};

export type PokeData = {
  name: string;
  item: { pokemon: { name: string; url: string } };
};
