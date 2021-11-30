import React from "react";
import {
  Wrapper,
  Container,
  ContainerGridImage,
  Image,
  ImageOption,
  Button,
} from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import Pokelogo from "../../img/pokelogo.png";
import Grass from "../../img/leaf.png";
import Fire from "../../img/fire.png";
import Water from "../../img/water.png";
import Rock from "../../img/rock.png";
import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";

export const Home = ({ navigation }: any) => {
  return (
    <Container>
      <Wrapper>
        <Image resizeMode="center" source={Pokelogo} />
        <ContainerGridImage>
          <Button onPress={() => navigation.navigate("Shop")}>
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
