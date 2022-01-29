import React, { useEffect, useState } from "react";
import { Text, ImageBackground, TouchableOpacity } from "react-native";
import api from "../../../services/api";
import { formatPricetoBRL } from "../../functions";
import { PokeData, PokeDataList } from "../../types";
import {
  CardButton,
  CardButtonText,
  CardContainer,
  CardText,
  Image,
  Wrapper,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../common/types";
import { useNavigation } from "@react-navigation/core";

export const Card = ({ item, typeElement }: PokeDataList) => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    sprites: { front_default: "" },
  } as PokeData);

  type cardScreenProp = StackNavigationProp<RootStackParamList, "Details">;

  const navigation = useNavigation<cardScreenProp>();

  useEffect(() => {
    api.get(item.pokemon.url).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return (
    <CardContainer typeElement={typeElement}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", { id: pokemon.id, typeElement })
        }
      >
        <Image
          source={{
            uri:
              pokemon.sprites.front_default ||
              "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          }}
        />
        <Wrapper>
          <CardText>{item.pokemon.name}</CardText>
          <CardText bold="bold">{formatPricetoBRL(pokemon.id)}</CardText>
        </Wrapper>
        <CardButton typeElement={typeElement}>
          <CardButtonText>ADICIONAR AO CARRINHO </CardButtonText>
        </CardButton>
      </TouchableOpacity>
    </CardContainer>
  );
};
