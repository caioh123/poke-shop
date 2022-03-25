import React from "react";
import { View, Text } from "react-native";
import Pokelogo from "../../img/pokelogo.png";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Container, Image, ButtonBack, TextHeader, Wrapper } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../commonStyles";
import { useCart } from "../../context/cartContext";
import { RootStackParamList } from "../types";

interface Props {
  typeElement: string;
}

type CartScreenProp = StackNavigationProp<RootStackParamList, "Cart">;

export const Header = ({ typeElement }: Props) => {
  const { cart, addToCart } = useCart();

  const navigation = useNavigation<CartScreenProp>();

  console.log(typeElement);
  return (
    <>
      <Container typeElement={typeElement}>
        <ButtonBack onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={30} color={colors.white} />
          <TextHeader element="back"> Voltar</TextHeader>
        </ButtonBack>
        <Image resizeMode="center" source={Pokelogo} />
        <Wrapper onPress={() => navigation.navigate("Cart")}>
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
