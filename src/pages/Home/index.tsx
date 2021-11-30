import React from "react";
import {
  Wrapper,
  Container,
  ContainerGridImage,
  Image,
  ImageBackground,
  ImageContainer,
  ImageOption,
  MainContainer,
  Button,
} from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import Pokelogo from "../../img/pokelogo.png";
import Grass from "../../img/leaf.png";
import Fire from "../../img/fire.png";
import Water from "../../img/water.png";
import Rock from "../../img/rock.png";
import { useNavigation } from "@react-navigation/core";

const navigation = useNavigation();

const onEnterShop = () => {
  navigation.navigate("Shop");
};

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Image resizeMode="center" source={Pokelogo} />
        <ContainerGridImage>
          <Button onPress={onEnterShop}>
            <ImageOption resizeMode="center" source={Grass} />
          </Button>
          <Button>
            <ImageOption resizeMode="center" source={Fire} />
          </Button>
        </ContainerGridImage>
      </Wrapper>
    </Container>
  );
};
