import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsParams, PokeStatus } from "../../common/types";
import api from "../../services/api";
import { Header } from "../../common/Header";
import { MainContainer } from "./styles";
import { Card } from "../../common/components/Card";
import { CardStatus } from "../../common/components/CardStatus";

type Props = NativeStackScreenProps<DetailsParams, "Details">;

export const Details = ({ route }: Props) => {
  const { typeElement, id } = route.params;

  const [pokemon, setPokemon] = useState({} as PokeStatus);


  useEffect(() => {
    api.get(`/pokemon/${id}`).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return (
    <>
      <Header typeElement={typeElement} />
      <MainContainer>
        <CardStatus pokemon={pokemon} />
      </MainContainer>
    </>
  );
};
