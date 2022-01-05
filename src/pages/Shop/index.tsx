import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { MainContainer } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Header } from '../../common/Header';
import api from '../../services/api';
import { ShopParamList, PokeData } from '../../common/types';

type Props = NativeStackScreenProps<ShopParamList, 'Shop'>;

export const Shop = ({ route }: Props) => {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  const { typeElement } = route.params;

  useEffect(() => {
    api.get(`/type/${typeElement}`).then((response) => {
      setPokemons(response.data.pokemon);
    });
  }, []);

  return (
    <>
      <Header typeElement={typeElement} />
      <MainContainer>
        <FlatList
          data={pokemons}
          renderItem={({ item }: PokeData) => {
            return <Text style={{ color: 'white' }}>{item.pokemon.name}</Text>;
          }}
        />
      </MainContainer>
    </>
  );
};
