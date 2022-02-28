import React from "react";
import { View, Text } from "react-native";
import { Container, Image, ButtonBack, TextHeader, Wrapper } from "./styles";
import Pokelogo from "../../img/pokelogo.png";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../commonStyles";
import { useCart } from "../../context/cartContext";

export const Header = ({ typeElement }: string) => {
  const { cart, addToCart } = useCart();

  console.log(cart);

  return (
    <>
      <Container typeElement={typeElement}>
        <ButtonBack>
          <AntDesign name="back" size={30} color={colors.white} />
          <TextHeader element="back">Lojas</TextHeader>
        </ButtonBack>
        <Image resizeMode="center" source={Pokelogo} />
        <Wrapper>
          <View>
            <TextHeader>Meu carrinho</TextHeader>
            <TextHeader>{cart.length} itens</TextHeader>
          </View>
          <AntDesign name="shoppingcart" size={30} color={colors.white} />
        </Wrapper>
      </Container>
    </>
  );
};
