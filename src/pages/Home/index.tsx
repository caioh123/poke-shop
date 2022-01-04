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
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../common/types"; 

type mainScreenProp = StackNavigationProp<RootStackParamList, "Home">

export const Home = () => {

const navigation = useNavigation<mainScreenProp>()

  return (
    <Container>
      <Wrapper>
        <Image resizeMode="center" source={Pokelogo} />
        <ContainerGridImage>
          <Button onPress={() => navigation.navigate("Shop", {type: "grass"})}>
            <ImageOption resizeMode="center" source={Grass} />
          </Button>
          <Button onPress={() => navigation.navigate("Shop", {type: "fire"})}>
            <ImageOption resizeMode="center" source={Fire} />
          </Button>
        </ContainerGridImage>
      </Wrapper>
    </Container>
  );
};
