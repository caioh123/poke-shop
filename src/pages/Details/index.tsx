import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsParams, PokeStatus } from "../../common/types";
import api from "../../services/api";
import { Header } from "../../common/Header";
import {
  MainContainer,
  PokeTitle,
  Container,
  Image,
  ContainerTypesWrapper,
  ContainerTypes,
  PokePrice,
  ContainerType,
  Type,
} from "./styles";
import { Card } from "../../common/components/Card";
import { CardStatus } from "../../common/components/CardStatus";
import { formatPricetoBRL } from "../../common/functions";
import { FlatList } from "react-native-gesture-handler";
import { TypeProps } from "../../common/types";

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
        <Container>
          <PokeTitle>{pokemon.name}</PokeTitle>
          <PokePrice>{formatPricetoBRL(pokemon.id)}</PokePrice>
          {pokemon.name && (
            <Image
              source={{
                uri:
                  pokemon.sprites.front_default ||
                  "https://images.unsplash.com/photo-1641437123627-837979a33c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
              }}
            />
          )}

          <ContainerTypesWrapper>
            <ContainerType>Tipos</ContainerType>
            <ContainerTypes>
              <FlatList
                keyExtractor={(item) => item.type.name}
                data={pokemon.types}
                renderItem={({ item }: TypeProps) => (
                  <>

                    <Type>{item.type.name}</Type>
                  </>
                )}
                />
            </ContainerTypes>
            <ContainerType style={{marginTop: "5"}}>Stats Iniciais</ContainerType>
          </ContainerTypesWrapper>
        </Container>
      </MainContainer>
    </>
  );
};
